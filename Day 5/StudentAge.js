function ageData(year)
{
    if (year<=0)
    {
        console.log("Enter valid Birth Year");
    }
    else
        return 2026-year
}

function voting_eligibility(callback)
{
    if (callback >= 18)
        console.log("Candidate is eligible")
    else
        console.log("Candidate is not eligible");
        
}

voting_eligibility(ageData(2010));
voting_eligibility(ageData(1997));
voting_eligibility(ageData(-1994));

