window.onload = function() {
  
  // based on contents of a td tag, returns whether a certain right exists or does not
  function getLegalityStatus(td) {
    const images = Array.from(td.querySelectorAll('img'));
    let legality = images.reduce((status, image) => {
      if (image.alt === 'No') {
      status.no++;
      } else if (image.alt === 'Yes') {
        status.yes++;
      } else if (image.alt === 'Emblem-question.svg') {
        status.question++;
      }
      return status;
    }, {no: 0, yes: 0, question: 0});
    
    if (legality.question > 0 || (legality.no > 0 && legality.yes > 0)) {
      return 'complicated';
    } else if (legality.no === 1) {
      return 'no';
    } else if (legality.no > 1) {
      return 'death';
    } else if (legality.yes) {
      return 'yes';
    }
  }

  function cleanText(text) {
    let cleanRegex = /^ *\/|\[.*?\]|[^ a-zA-Z0-9,.+\-\(\)]/g;
    return text.replace(cleanRegex, '');
  }

  // table h4 : region name
  // table h4 + table > tbody : region table
  // table h4 + dl + table > tbody : region table specifically for EU
  const regions = Array.from(document.querySelectorAll('table h4, table h4 + table > tbody, table h4 + dl + table > tbody'));
  const json = {};
  let region = '';

  regions.forEach(element => {
    if (element.tagName === 'H4') {
      region = element.innerText;
    } else if (element.tagName === 'TBODY') {
      // tr : countryAnchor (loop starts at 1 since first row contains table headers)
      let countries = Array.from(element.querySelectorAll('tr'));

      for (let i = 1; i < countries.length; i++) {
        let fields = Array.from(countries[i].querySelectorAll('td'));
        // the title property on 'span a' is the name of a country
        // if it does not exist, continue to the next iteration of the loop
        let countryAnchor = fields[0].querySelector('span a');
        if (!countryAnchor || !countryAnchor.title || countryAnchor.title === 'United States' && region === 'Micronesia') {
          continue;
        }

        const country = countryAnchor.title;

        // td elements in these positions correspond with the following rights
        const sameSexSexualActivityStatus = getLegalityStatus(fields[1]);
        const sameSexSexualActivityText = cleanText(fields[1].textContent);

        const sameSexUnionRecognitionStatus = getLegalityStatus(fields[2]);
        const sameSexUnionRecognitionText = cleanText(fields[2].textContent);

        const sameSexMarriageStatus = getLegalityStatus(fields[3]);
        const sameSexMarriageText = cleanText(fields[3].textContent);

        const adoptionBySameSexCouplesStatus = getLegalityStatus(fields[4]);
        const adoptionBySameSexCouplesText = cleanText(fields[4].textContent);

        const openMilitaryServiceStatus = getLegalityStatus(fields[5]);
        const openMilitaryServiceText = cleanText(fields[5].textContent);

        const antiDiscriminationStatus = getLegalityStatus(fields[6]);
        const antiDiscriminationText = cleanText(fields[6].textContent);

        const genderIdentityRecognitionStatus = getLegalityStatus(fields[7]);
        const genderIdentityRecognitionText = cleanText(fields[7].textContent);

        json[country] = {
          region,
          sameSexSexualActivityStatus,
          sameSexSexualActivityText,
          sameSexUnionRecognitionStatus,
          sameSexUnionRecognitionText,
          sameSexMarriageStatus,
          sameSexMarriageText,
          adoptionBySameSexCouplesStatus,
          adoptionBySameSexCouplesText,
          openMilitaryServiceStatus,
          openMilitaryServiceText,
          antiDiscriminationStatus,
          antiDiscriminationText,
          genderIdentityRecognitionStatus,
          genderIdentityRecognitionText
        };
      }
    }
  });
  console.log(JSON.stringify(json));
}
