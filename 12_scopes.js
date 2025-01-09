let a = 200;

{
    let a = 10;
    // console.log("Block Scope: ", a);
}

// console.log("Global Scope: ", a);

function one(){
    const username = "Vishal";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two()

}

one()