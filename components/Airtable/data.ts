var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_ID
);

// export default function demo(){
//     base('Participants').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records: any[], fetchNextPage: () => void) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Name'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err: any) {
//     if (err) { console.error(err); return; }
// });
//     console.log(process.env.AIRTABLE_ID);
// }

export default function RegisterAPI(
  name: string,
  email: string,
  phone: string,
  password: string,
  college: string,
  branch: string,
  year: string
) {
  console.log(name, email, phone, password, college, branch, year);
  base("Participants").create(
    [
      {
        fields: {
          Name: name,
          Email: email,
          Phone: phone,
          Password: password,
          College: college,
          Branch: branch,
          Year: year,
        },
      },
    ],
    function (err: any, records: any[]) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
}
