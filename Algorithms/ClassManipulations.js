class CorporateSecrvices {
    constructor() {
      this.data = {
          Company: {
            name: "ABC INCORPORATION PTE LTD",
            incorporationDate: "08-12-2013",
            Person: [
                {
                    fistName: "James",
                    lastName: "Smith",
                    dob: "12-08-1990",
                    conutnry: "Singapore",
                    idType: "Passport",
                    widoId: "4578"
                },
                {
                    fistName: "Anna",
                    lastName: "Johnson",
                    dob: "29-02-1967",
                    conutnry: "Singapore",
                    idType: "Singapore Pass",
                    widoId: "0956"
                },
                {
                    fistName: "Richard",
                    lastName: "Jameson",
                    dob: "09-12-1978",
                    conutnry: "Japan",
                    idType: "Work Permit",
                    widoId: "5290"
                },
                {
                    fistName: "Emma",
                    lastName: "Semuels",
                    dob: "05-01-1988",
                    conutnry: "USA",
                    idType: "Passport",
                    widoId: "1143"
                },
            ],
            Officers: [
                {
                    person: "4578",
                    role: "Shareholder",
                    startDate: "13-08-2010",
                    widoId: "2806"
                },
                {
                    person: "1143",
                    role: "Shareholder",
                    startDate: "25-05-2015",
                    widoId: "4530"
                },
                {
                    person: "5290",
                    role: "Director",
                    startDate: "31-10-2018",
                    widoId: "8657"
                },
                {
                    person: "5290",
                    role: "Secretary",
                    startDate: "17-07-2012",
                    widoId: "0012"
                }
            ],
            ShareholdingDetail: [
                {
                    person: "4578",
                    certificateNumber: 1,
                    aquisitionDate: "06-02-2017",
                    shareClass: "Ordinary",
                    shareCurrency: "US Dollar",
                    shareQty: 100,
                    widoId: "2632"
                },
                {
                    person: "4578",
                    certificateNumber: 2,
                    aquisitionDate: "10-09-2017",
                    shareClass: "Ordinary",
                    shareCurrency: "US Dollar",
                    shareQty: 400,
                    widoId: "9235"
                },
                {
                    person: "4578",
                    certificateNumber: 3,
                    aquisitionDate: "19-06-2018",
                    shareClass: "Preferred",
                    shareCurrency: "Singapore Dollar",
                    shareQty: 250,
                    widoId: "2948"
                },
                {
                    person: "1143",
                    certificateNumber: 4,
                    aquisitionDate: "05-09-2019",
                    shareClass: "Ordinary",
                    shareCurrency: "Euro",
                    shareQty: 150,
                    widoId: "1212"
                }
            ],
            ShareholdingSummary: [
                {
                    person: "4578",
                    shareClass: "Ordinary",
                    shareCurrency: "US Dollar",
                    shareQty: 500,
                    widoId: "9822"
                },
                {
                    person: "4578",
                    shareClass: "Preferred",
                    shareCurrency: "Singapore Dollar",
                    shareQty: 250,
                    widoId: "2343"
                },
                {
                    person: "1143",
                    shareClass: "Ordinary",
                    shareCurrency: "Euro",
                    shareQty: 150,
                    widoId: "9678"
                }
            ]
          }
      };
    }

    createCertificate(forPerson, byPerson, shareClass, shareCurrency, shareQty) {
        //Step 1: get widoId's of users that are part of the certificate creating process from Persons table.
        const forId = this.getPersonWidoIdByName(forPerson.firstName, forPerson.lastName);
        const byId = this.getPersonWidoIdByName(byPerson.firstName, byPerson.lastName);
        //Step 2: add new role for Richard Jameson in Officers table.
        this.updateOfficerRoleById(forId, {role: "Shareholder"});
        //Step 3: create a new entry in the ShareholdingDetail table about the newly issued sertificate.
        this.addEntryToShareholdingDetail(
            {
                person: forId,
                certificateNumber: this.data.Company.ShareholdingDetail.length + 1,
                aquisitionDate: this.getDate(),
                shareClass,
                shareCurrency,
                shareQty,
                widoId: this.generateWidoId()
            }
        );
        //Step 4: Update data in ShareholdingSummary
        this.updateShareholdingSummary(forId, byId, shareQty, shareClass, shareCurrency);

        //Check how data has changed after all steps in browser console.
        console.log(this.data.Company);
    }

    getPersonWidoIdByName(firstName, lastName) {
      const user = this.data.Company.Person.find((usr) => usr.fistName === firstName && usr.lastName === lastName) || {};
      return user.widoId;
    }

    updateOfficerRoleById(id, updates = {}) {
        let roles = this.data.Company.Officers.filter((ofcr) => ofcr.person === id && ofcr.role === updates.role);
        if (!roles.length) {
            this.data.Company.Officers.push({
                person: id,
                role: updates.role,
                startDate: this.getDate(),
                widoId: this.generateWidoId()
            })
        }
    }

    addEntryToShareholdingDetail(entryData = {}) {
        this.data.Company.ShareholdingDetail.push(entryData);
    }

    updateShareholdingSummary(forId, byId, shareQty, shareClass, shareCurrency) {
        let forData = this.data.Company.ShareholdingSummary.find((usr) => usr.person === forId) || {};
        let byData = this.data.Company.ShareholdingSummary.find((usr) => usr.person === byId) || {};

        //Checking if there is a user with given id in the table. If not - creating one.
        if (Object.keys(forData).length) {
            const forIdIndex = this.data.Company.ShareholdingSummary.findIndex((usr) => usr.person === forId) || {};
            this.data.Company.ShareholdingSummary[forIdIndex].shareQty = forData.shareQty + shareQty;
        } else {
            this.data.Company.ShareholdingSummary.push({
                person: forId,
                shareClass,
                shareCurrency,
                shareQty,
                widoId: this.generateWidoId()
            })
        }

        const byIdIndex = this.data.Company.ShareholdingSummary.findIndex((usr) => usr.person === byId) || {};
        this.data.Company.ShareholdingSummary[byIdIndex].shareQty = byData.shareQty - shareQty;
    }

    getDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        return dd + '-' + mm + '-' + yyyy
    }

    generateWidoId() {
        //Ideally we need to create qnique id but for now let's just generate a random 4-digits number.
        return `${Math.floor(1000 + Math.random() * 9000)}`;
    }
}

  const instance = new CorporateSecrvices();
  instance.createCertificate(
        {firstName: "Richard", lastName: "Jameson"}, 
        {firstName: "Emma", lastName: "Semuels"}, 
        "Ordinary", 
        "Euro",
        50
    );