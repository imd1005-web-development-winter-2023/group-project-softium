let pagenum = 0;

const c1_1 = [
    "Hello",
    "How are you",
    "Do you have my pizza?",
    "I'm very hungry today"
]


//loop to draw through the buttons
//first page, first option
const page={
    imagePath: "./images/1.jpg", //background
    options: [
      {
        text: "say Hi",
        //next image/ page, the 4th page
        load: 4,
      },
      {
        text: "say Hi2",
        //next image/ page, the 4th page
        load: 3,
      }
    ]
  }
  
  const novel=[
    //first page inside datastructure, create a render to run the first page
    {
      imagePath: "./images/1.jpg", //background
      options: [
        {
          text: "say Hi",
          //next image/ page, the 4th page
          load: 4,
        },
        {
          text: "say Hi2",
          //next image/ page, the 4th page
          load: 3,
        }
      ]
    },
  
    //index 1
    {
      imagePath: "./images/2.jpg", //background
      options: [
        {
          text: "say Hi",
          //next image/ page, the 4th page
          load: 4,
        },
        {
          text: "say Hi2",
          //next image/ page, the 4th page
          load: 3,
        }
      ]
    },
  
    {
      imagePath: "./images/3.jpg", //background
      options: [
        {
          text: "say Hi",
          //next image/ page, the 4th page
          load: 4,
        },
        {
          text: "say Hi2",
          //next image/ page, the 4th page
          load: 3,
        }
      ]
    },
  
    {
      imagePath: "./images/4.jpg", //background
      options: [], //empty array
    },
  
  ]
  
  const currentPage= 0;
  
  function drawNovel() {
    if (novel[currentPage].options.length === 0)
    {
      console.log("no Options")
    }
  
    for (let i= 0; i < novel[currentPage].options.length; i++ ){
      console.log("Option", novel[currentPage].options[i].text) //get button text
      //create and update page
    }
    console.log("Current image: ", novel[currentPage].imagePath) //get image path
  
  
  }
  
  drawNovel();
  
  //check options and stuff and just refresh text