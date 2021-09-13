OVIAVO code test
================

The goal of this test is to evaluate your approach to programming. The
journey is more important than the destination.

Installation
============
1. yarn install --pure-lockfile
2. yarn start

Background
==========
This represents a graph in our reporting. It represents the amount per month
that is filed for reimbursement from our customer's employees to us. This graph
should always have data for one year and the api (as abstracted by ApiData)
provides you with a years worth of:

- a 1-based month number
- total amount and currency for a given month
- a running average starting at the beginning of the year

Assignment
==========
1. Complete the mock data for 12 months, with randomized or handpicked values
   and verify the total is the bar graph and average the line. You don't have
   to make real running averages.
2. Integrate the year selector and position it "as part of the graph". The mock
   data should accomodate at least one more year.

Layout
------
All page layout is stripped as to not distract from the issue at hand and
introduce more complexity. Making it prettier is not part of the assignment ~:)
