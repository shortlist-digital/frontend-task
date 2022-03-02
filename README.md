# Stylist frontend task
To get to know you a little better, we would like you to build a small component utilising our GraphQL endpoint (it’s still very much a WIP so be open-minded). It should be a fun exercise - don't worry too much about prettifying the UI. 

This repo has been created for you to make life a little easier, as we're aware code tests can be rather arduous. It also includes a small data fetch example at `/example`.

Please fork this repository and when you're ready to submit it email the link to tom.reeves@stylist.co.uk and david.hayter@stylist.co.uk.

To run: ```npm i``` and ```npm run dev```. Please use Node > v14.

## The task

The component is simple: we want you to build a small address locator. 


We leverage Loqate for our address location, specifically Capture Interactive Find and Capture Interactive Retrieve. You can find the documentation for these APIs here https://www.loqate.com/resources/support/apis/capture/. Both of these APIs are available as queries within the GraphQL endpoint, which you can either directly query here https://pjg9t4mlk1.execute-api.eu-west-1.amazonaws.com/staging/graphql

The component should render a text input, which on input should render a list of potential address matches. Any item in the list should be clickable, which on click should render out the full address.

We're mostly interested in how you fetch data, handle potential pitfalls and render the results in a legible way.

Above all, have some fun with it - and use it as an opportunity to show us what you can do.

Best of luck!
