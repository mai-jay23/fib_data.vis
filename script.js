const dataElement= document.getElementById('Date');

console.log(dataElement)

let currentDate= new Date();

console.log(currentDate);

dataElement.innerHTML = currentDate.toLocaleDateString('en-us', { year: "numeric", month: "long", day:"numeric"});


const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'e381ac4e82msh575c68643164e92p128282jsn23fd113e52d4',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid :"23424934"})
};


fetch(url,options)
.then (result => result.json())
.then(result =>{ let trendingTopics= []
for(let i=0; i<10; i++)
	{trendingTopics.push(result.trends[i]);}

let topics =trendingTopics.map(topic=> {
	return topic.name;
})
console.log(topics);


let volume= trendingTopics.map(topics=> {
	return topics.volume;
})
console.log(volume);
 const myChart = document.getElementById("myChart")
console.log(myChart)

let barChart = new Chart(myChart, {
   type: 'bar',

        data: {

          labels: topics,

          datasets: [{

           label: '# of tweets/xeets',

            data: volume,

            borderWidth: 2,

            backgroundColor: [

                'rgba(255, 99, 132, 0.2)',

                'rgba(255, 159, 64, 0.2)',

               'rgba(255, 205, 86, 0.2)',

                'rgba(75, 192, 192, 0.2)',

                'rgba(54, 162, 235, 0.2)',

                'rgba(153, 102, 255, 0.2)',

                'rgba(201, 203, 207, 0.2)'

            ],

            borderColor: [

                'rgb(255, 99, 132)',

              'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',

               'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            hoverBackgroundColor: [
                'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
   'rgb(255, 205, 86)',
   'rgb(75, 192, 192)',
   'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ]
}]
},
 options: {
  indexAxis: 'y',
scales: {
   y: {
 beginAtZero: true
 }
 }
 }
 }); 
console.log}) ;


// let myPost ={
// 	name : "PacquiaoVSBarrios",
// 	query: "Pacquiao+VS+Barrios",
// 	url:"search?q=%22Pacquiao+VS+Barrios%22",
// 	volume : 54000
// }



// console.log(myPost.name);
// console.log(myPost.query);
// console.log(myPost.url);
// console.log(myPost.volume);

// const myChart = document.getElementById("myChart")
// console.log(myChart)



