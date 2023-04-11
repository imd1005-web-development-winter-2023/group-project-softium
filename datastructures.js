


//button was clicked! //added this
  document.querySelector('#button-1').addEventListener('click', function(){ console.log('The button was clicked!') });  
  document.querySelector('#button-2').addEventListener('click', function(){ console.log('The button was clicked!') });

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
  ],
  //added this
  textContent: "sayHiHi",
}

const novel=[
  //first page inside datastructure, create a render to run the first page
  {
    imagePath: "./images/1.jpg", //background
    //changed options out
    options: [],
    textContent: "",
    load: 2,
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
    console.log("no Options") //added 1 to current pages, added this
    currentPage++;
  }


  for (let i= 0; i < novel[currentPage].options.length; i++ ){
    console.log("Option", novel[currentPage].options[i].text) //get button text
    //create and update page
  }
  console.log("Current image: ", novel[currentPage].imagePath) //get image path


}

drawNovel();

//check options and stuff and just refresh text