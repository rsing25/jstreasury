

{edit}										{search }
Name
Employee number
Department



email address
work phone
ABC
1111
q




XYZ


q




Lisst of employee , departments


Name							Department
Number						Email adress
							Work phone
Home address
Home phone



API rest data
Payload : [[{col1,” ” }, {col2,” ” }...... ], {col1,” ” }, {col2,” ” }......]




React Js

Compoent : table-compoent.js  Reactbootsraptable  // table compent
Compoent : display-data.js

Conainers: page-list.js (mapStateToProps) // retrive
Conainers: page-detail.js(mapStateToProps, mapDispatchToProps) // update


Actions:
3) ActionCreator
	Const API_KEY =””
	Const ROOT_URL= “”
 getListData = () => {

	Const request = axios.get();
		return {
		Type: “TABLE_DATA”
		Payload: request
		}
	
	} 


Const API_KEY =””
	Const ROOT_URL= “”
 getPageData = () => {

	Const request = axios.get();
		return {
		Type: “PAGE_DATA”
		Payload: request
		}
	
	} 

	         updateRow = (row) => {
		
			
		}
Reducer index.js

	
	Const rootReducer = combinerReducer({
	listtData: listRedcuer,
	pageData: pageReducer
})


List-reducer.js 
Page-reducer.js
	export default funciton(statre = {} , action) {
		switch(action.type) {
		}
	}

---------------------------------------------------------------------------------------------------------------------------
var validWords = [an, all, ant, aunt, ……hears,… share, fare, hare, hares, shear];

Given an input word - share
Find all words in the validWords that can be formed with the letters of the given input word

share, hares, shear, hears


Const validWords = ( inp) => {

var validWords = [an, all, ant, aunt, ……hears,… share, fare, hare, hares, shear];

const returnArr = [];

	Const inpArr = inp.split(“”);  // [‘s’,’h’,’a’,’r’,’e’]

		Const validObj = {};
		validWords.forEach( validWord)  {
			Let validCureentWord = true;
			inpArr.forEach(  inarrVal) {
			if( validWord.indexOf(inarrVal) != -1) {
			} else {
				validCureentWord == false;
			}
			}
			
if(validCureentWord) {
returnArr.piush(validWord);
}
		
		}
return returnArr;

}




