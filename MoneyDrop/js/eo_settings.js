//EOFORM v2.04
//RULES OVERRIDE FOR JOOMLA
gAutoRulesLink=true;


/*** EO FORM: SETTTINGS ****************/
inStrLabelFolder="images"; //default

//CONTEST LABEL LOCATION
//Specify EO label location. If "assets/" no need to set this variable as "assets/" is the default
//inStrLabelFolder="images"

//CONTEST LABEL SETUP
//1. For each contest add the file name number that represents that contest ex. eo_contestLabel_4.png would be [4]
//2. For contests that have a decsision: add each file number, separted by commas into that place holder. ex. [4,5]
//3. For contetes where the user may choose not to participate - make sure ZERO is part of that list. ex. [0,4,5]
//The cookie is eoForm:  setNameVal("eoForm","contestChoice_0",1);
//4. The FIRST number within each contest will be the default. if ZERO is first and a selection is not made then a label will not populate.
//
//NOTE: The number represents the file name of that contest label!
//NOTE: ZERO means do not show a label

//MORE EXAMPLES
/*

*ONE CONTEST, NO CHOICES
   arrContests.push([1])
   
*ONE CONTEST, TWO CHOICES (USER IS REQUIRED TO MAKE A CHOICE)
   arrContests.push([1,2])   

*TWO CONTESTS, NO CHOICES
   arrContests.push([1],[2])   

*TWO CONTESTS, CONTEST one HAS TWO CHOICES (USER IS REQUIRED TO MAKE A CHOICE)
   arrContests.push([1,2],[3])   

*TWO CONTESTS, CONTEST two THE USER CAN CHOOSE NOT TO PARTICIPATE (most likely a device)
   arrContests.push([1],[0,2])   
   
*TWO CONTESTS, CONTEST one HAS TWO CHOICES and CONTEST two THE USER CAN CHOOSE NOT TO PARTICIPATE (most likely a device)
   arrContests.push([1,2],[0,3])

*/

arrContests.push([1],[2,3]);



//BACKEND ONLY USE THIS WHEN USER HAS A CHOICE OF CONTEST CHARACTERISTICS....


/*** TEMPORARY GIVEAWAY NUMBERS *****************/
//example:
//arrGwy.push("1400");

arrGwy.push("1830");
