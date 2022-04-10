const generateLicense = (license) => {
    if (license === "MIT") {
      return `
    Licensed under the *[MIT License](https://opensource.org/licenses/MIT)*
     `;
    } else if (license === "GNU AGPLv3") {
      return `
    Licensed under the *[GNU AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0)*
      `;
    } else if (license === "GNU GPLv3") {
      return `
    Licensed under the *[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)*
      `;
    } else if (license === "GNU LGPLv3") {
      return `
    Licensed under the *[GNU LGPLv3 License](https://www.gnu.org/licenses/lgpl-3.0)*
      `;
    } else if (license === "Mozilla Public License 2.0") {
      return `
    Licensed under the *[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)*
      `;
    } else if (license === "Apache License 2.0") {
      return `
    Licensed under the *[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)*
      `;
    } else if (license === "Boost Software License 1.0") {
      return `
    Licensed under the *[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)*
      `;
    }
  };
  //${generateLicense(readMeObject.license)}
  const generateLicenseBadge = (badge) => {
    if (badge === "MIT") {
      return `
     ![MIT License](https://img.shields.io/badge/license-MIT-yellow)
     `;
    } else if (badge === "GNU AGPLv3") {
      return `
    ![GNU AGPLv3 License](https://img.shields.io/badge/license-GNU_AGPLv3-red)
      `;
    } else if (badge === "GNU GPLv3") {
      return `
    ![GNU GPLv3 License](https://img.shields.io/badge/license-GNU_GPLv3-red)
      `;
    } else if (badge === "GNU LGPLv3") {
      return `
    ![GNU LGPLv3 License](https://img.shields.io/badge/license-GNU_LGPLv3-red)
      `;
    } else if (badge === "Mozilla Public License 2.0") {
      return `
    ![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla_Public_License_2.0-green)
      `;
    } else if (badge === "Apache License 2.0") {
      return `
    ![Apache License 2.0](https://img.shields.io/badge/license-Apache_License_2.0-blue)
      `;
    } else if (badge === "Boost Software License 1.0") {
      return `
    ![Boost Software License 1.0](https://img.shields.io/badge/license-Boost_Software_License_1.0-9cf)
      `;
    }
  };
  
  module.exports = (readMeObject) => {
    return `
  # ${readMeObject.title}
  ${generateLicenseBadge(readMeObject.license)}
  ******
  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [License](#license)
  - [Install](#install)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ## Description <a name="description"></a>
  ******
  ${readMeObject.description}
  ## Usage <a name="usage"></a>
  ******
  ${readMeObject.usage}
  ## License <a name="license"></a>
  ******
  ${generateLicense(readMeObject.license)}
  ## Install <a name="install"></a>
  ******
  ${readMeObject.install}
  ## Contributing <a name="contributing"></a>
  ******
  ${readMeObject.contributing}
  ## Test <a name="test"></a>
  ******
  ${readMeObject.test}
  ## Questions <a name="questions"></a>
  ******
  Any questions about this project, please email ${readMeObject.email} </br>
  View my Github profile at [${readMeObject.github}](https://github.com/${
      readMeObject.github
    })
  `;
  };