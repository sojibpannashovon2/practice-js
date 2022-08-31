

const book = [

    { name: "mabila", number: 56, work: 'frelencing' }

]

// console.log(book);


// console.log(book[0].name);


const tumi = {

    counter: 1000,

    id: [{ name: 'santo', girlfriendName: 'ali', job: 'farmer' },
    { name: ' Angelik Ali', boyfrinedName: 'santo', job: 'paraberani' }]

};

// console.log(tumi);

// console.log(tumi.id[0].girlfriendName);

// console.log(tumi.id[1].boyfrinedName);


const arifur = {

    id: 212002126,

    fullName: 'Md Arifur Rahman',



    permanantAddress: {


        DhakaAddress: {
            first: 'framgate',

            second: 'solimmulla',

            third: 'munsurabad'
        },

        firstBazar: 'framgate',

        secondBazar: 'townHall',

        thirdBazar: 'adabor',



    },

    homeAddress: [

        { villageName: 'Durlovepur' },
        { postOffice: 'Nekmord' },
        { upozilla: 'Ranisoinkail' },
        { district: 'Thakurgoan' },

    ]

}

const result = arifur.permanantAddress.DhakaAddress;

const result1 = arifur.permanantAddress.DhakaAddress.third;

// const result1 = arifur.permanantAddress.DhakaAddres?.third;

console.log(result);
console.log(result1);

console.log(arifur.homeAddress[3].district);

