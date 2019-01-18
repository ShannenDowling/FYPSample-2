// JavaScript Document

var overallTotal = total + total2 + total3 + total4 + total5 + total6 + total7 + total8
+ total9 + total10 + total11;

var total = 0; 
var total2 = 0; 
var total3 = 0; 
var total4 = 0;  
var total5 = 0; 
var total6 = 0;
var total7 = 0; 
var total8 = 0;
var total9 = 0; 
var total10 = 0; 
var total11 = 0;

//Section1
    
    var section1 = new Array(4);
        section1[0] = Q1P1 = "";
        section1[1] = Q1P2 = "";
        section1[2] = Q1P3 = "";
        section1[3] = Q1P4 = "";
        
    function sectionOne()
    {
      var i;
      var total = 0;
      var len = document.forms[0].Q1P1.length;
      var result;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q1P1[i].checked)
        {
          Q1P1 = parseInt(document.forms[0].Q1P1[i].value);
          
          total += Q1P1;
        }
        
        if(document.forms[0].Q1P2[i].checked)
        {
          Q1P2 = parseInt(document.forms[0].Q1P2[i].value);
          
          total += Q1P2;
        }
        
        if(document.forms[0].Q1P3[i].checked)
        {
          Q1P3 = parseInt(document.forms[0].Q1P3[i].value);
          
          total += Q1P3;
        }
        
        if(document.forms[0].Q1P4[i].checked)
        {
          Q1P4 = parseInt(document.forms[0].Q1P4[i].value);
          
          total += Q1P4;
        }       
      }
      
       
        if(total>=16 && total<=20)
        {
            result = "Well done, you are clearly being productive in considering making"
            + " your services more universal";
        }
      
        else if(total>=10 && total<=15)
        {
            result = "With a little more thought you will see more opportunities for "
            + "increasing the universability of your services";
        }
      
        else if(total>=4 && total<=9)
        {
            result = "The face to face training session will be a great opportunity " +
            "for you to get guidance on progressing the universability of your organisation";
        }
      
      
      if(Q1P1 == "" || Q1P2 == "" || Q1P3 == "" || Q1P4 == "")
      {
        document.getElementById("radio").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio").innerHTML = result;
      }
    } 
 
//Section2

  var section2 = new Array(5);
      section2[0] = Q2P1 = "";
      section2[1] = Q2P2 = "";
      section2[2] = Q2P3 = "";
      section2[3] = Q2P4 = "";
      section2[4] = Q2P5 = "";
      
  function sectionTwo()
  {
      var i;
      var total2 = 0;
      var len = document.forms[0].Q2P1.length;
      var result2;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q2P1[i].checked)
        {
          Q2P1 = parseInt(document.forms[0].Q2P1[i].value);
          
          total2 += Q2P1;
        }
        
        if(document.forms[0].Q2P2[i].checked)
        {
          Q2P2 = parseInt(document.forms[0].Q2P2[i].value);
          
          total2 += Q2P2;
        }
        
        if(document.forms[0].Q2P3[i].checked)
        {
          Q2P3 = parseInt(document.forms[0].Q2P3[i].value);
          
          total2 += Q2P3;
        }
        
        if(document.forms[0].Q2P4[i].checked)
        {
          Q2P4 = parseInt(document.forms[0].Q2P4[i].value);
          
          total2 += Q2P4;
        }
        
        if(document.forms[0].Q2P5[i].checked)
        {
          Q2P5 = parseInt(document.forms[0].Q2P5[i].value);
          
          total2 += Q2P5;
        }              
      }
      
       
        if(total2>=20 && total2<=25)
        {
            result2 = "You have a very high level of appreciation of the mutual" +
            " benefits for all stakeholders in an inclusive organisation";
        }
      
        else if(total2>=12 && total2<=19)
        {
            result2 = "You have some sense of the benefits of a universal organisation";
        }
      
        else if(total2>=5 && total2<=11)
        {
            result2 = "The face to face training session will be a great opportunity " +
            "for you to gain some perspective of the benefits of universability to your" +
            " organisation and its members";
        }
      
      
      if(Q2P1 == "" || Q2P2 == "" || Q2P3 == "" || Q2P4 == "" || Q2P5 == "")
      {
        document.getElementById("radio2").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio2").innerHTML = result2;
      }
  }
  
//Section3  
  
  var section3 = new Array(2);
      section3[0] = Q3P1 = "";
      section3[1] = Q3P2 = "";
      
      
    function sectionThree()
    {
      var i;
      var total3 = 0;
      var len = document.forms[0].Q3P1.length;
      var result3;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q3P1[i].checked)
        {
          Q3P1 = parseInt(document.forms[0].Q3P1[i].value);
          
          total3 += Q3P1;
        }
        
        if(document.forms[0].Q3P2[i].checked)
        {
          Q3P2 = parseInt(document.forms[0].Q3P2[i].value);
          
          total3 += Q3P2;
        }
      }
      
       
        if(total3>=6 && total3<=10)
        {
            result3 = "You can see an inclusive future for your organisation and" +
            " its members, the challenge is now to ensure that your decisions and"
            + " resource allocations make this happen";
        }
      
        else if(total3>=2 && total3<=5)
        {
            result3 = "The face to face session has great scope to convince you of"
            + " the feasability of promoting inclusion - just keep your mind open to"
            + " the possibility";
        }
        
      
      if(Q3P1 == "" || Q3P2 == "")
      {
        document.getElementById("radio3").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio3").innerHTML = result3;
      }
  }

//Section4
  
  var section4 = new Array(2);
      section4[0] = Q4P1 = "";
      section4[1] = Q4P2 = "";
      
  function sectionFour()
  {
      var i;
      var total4 = 0;
      var len = document.forms[0].Q4P1.length;
      var result4;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q4P1[i].checked)
        {
          Q4P1 = parseInt(document.forms[0].Q4P1[i].value);
          
          total4 += Q4P1;
        }
      
        if(document.forms[0].Q4P2[i].checked)
        {
          Q4P2 = parseInt(document.forms[0].Q4P2[i].value);
          
          total4 += Q4P2;
        }
      }
      
      
      if(total4>=30 && total4<=40)
        {
            result4 = "Your organisation's value system is an inclusive one. Your"
            + " challenge will be to safeguard this and promote this philosophy "
            + "within the wider fitness sector";
        }
      
        else if(total4==20)
        {
            result4 = "While there is some openness to equality in your organisation"
            + " the commitment is not yet wholly embraced by all. Belief systems within"
            + " the organisation may be confused and possibly conflicting. It would"
            + " be desirable to promote dialogue amongst your stakeholders around the"
            + " of inclusion";
        }
        
        else if(total4>=0 && total4<=10)
        {
            result4 = "The face to face training session will only be of value to"
            + " progressing your UniversAbility if you are willing to challenge your"
            + " belief system about access to fitness services being a fundamental";
        }
        
      
      
      if(Q4P1 == "0")
      {
        document.getElementById("radio4").innerHTML = "You selected 'No', please ignore" +
        " part 2";  
      }
        
      else if(Q4P1 == "")
      {
        document.getElementById("radio4").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio4").innerHTML = result4;
      }
   } 
   
//Section5  
   var section5 = new Array(5);
      section5[0] = Q5P1 = "";
      section5[1] = Q5P2 = "";
      section5[2] = Q5P3 = "";
      section5[3] = Q5P4 = "";
      section5[4] = Q5P5 = "";
      
  function sectionFive()
  {
      var i;
      var total5 = 0;
      var len = document.forms[0].Q5P1.length;
      var result5;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q5P1[i].checked)
        {
          Q5P1 = parseInt(document.forms[0].Q5P1[i].value);
          
          total5 += Q5P1;
        }
        
        if(document.forms[0].Q5P2[i].checked)
        {
          Q5P2 = parseInt(document.forms[0].Q5P2[i].value);
          
          total5 += Q5P2;
        }
        
        if(document.forms[0].Q5P3[i].checked)
        {
          Q5P3 = parseInt(document.forms[0].Q5P3[i].value);
          
          total5 += Q5P3;
        }
        
        if(document.forms[0].Q5P4[i].checked)
        {
          Q5P4 = parseInt(document.forms[0].Q5P4[i].value);
          
          total5 += Q5P4;
        }
        
        if(document.forms[0].Q5P5[i].checked)
        {
          Q5P5 = parseInt(document.forms[0].Q5P5[i].value);
          
          total5 += Q5P5;
        }              
      }
      
       
        if(total5>=40 && total5<=50)
        {
            result5 = "Your intentions are very sound in respect of inclusion and"
            + " you have the potential to be a high achiever in this respect";
        }
      
        else if(total5>=20 && total5<=30)
        {
            result5 = "Your journey of making organisational policies inclusive "
            + "has started well and this may be the catalyst for enhanced UniversAbility"
            + " - if you are open to progressive change";
        }
      
        else if(total5 == 10)
        {
            result5 = "Your policies are confused and possibly conflicting. Some "
            + "guidance will be needed to bring greater coherency to your efforts"
            + " to date";
        }
      
        else if(total5 == 0)
        {
            result5 = "UniversAability is not something with which you have yet "
            + "engaged, so the face to face training session will be an opportunity"
            + " for significant learning in this respect";
        }
      
      
      if(Q5P1 == "" || Q5P2 == "" || Q5P3 == "" || Q5P4 == "" || Q5P5 == "")
      {
        document.getElementById("radio5").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio5").innerHTML = result5;
      }
  }
  
//Section 6 

  var section6 = new Array(5);
      section6[0] = Q6P1 = "";
      section6[1] = Q6P2 = "";
      section6[2] = Q6P3 = "";
      section6[3] = Q6P4 = "";
      section6[4] = Q6P5 = "";
      
  function sectionSix()
  {
      var i;
      var total6 = 0;
      var len = document.forms[0].Q6P1.length;
      var result6;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q6P1[i].checked)
        {
          Q6P1 = parseInt(document.forms[0].Q6P1[i].value);
          
          total6 += Q6P1;
        }
        
        if(document.forms[0].Q6P2[i].checked)
        {
          Q6P2 = parseInt(document.forms[0].Q6P2[i].value);
          
          total6 += Q6P2;
        }
        
        if(document.forms[0].Q6P3[i].checked)
        {
          Q6P3 = parseInt(document.forms[0].Q6P3[i].value);
          
          total6 += Q6P3;
        }
        
        if(document.forms[0].Q6P4[i].checked)
        {
          Q6P4 = parseInt(document.forms[0].Q6P4[i].value);
          
          total6 += Q6P4;
        }
        
        if(document.forms[0].Q6P5[i].checked)
        {
          Q6P5 = parseInt(document.forms[0].Q6P5[i].value);
          
          total6 += Q6P5;
        }              
      }
      
       
        if(total6>=30 && total6<=50)
        {
            result6 = "You are already a potential resource for people with disbilities"
            + " in your community, as your networks are an essential element in the"
            + " UFIT approach";
        }
      
        else if(total6>=10 && total6<=20)
        {
            result6 = "You have made a positive start upon which your organisation"
            + " can build sound relationships with people with disabilities. Unit"
            + " three will offer you more ideas in respect of forging alliances with"
            + " people with disabilities";
        }
      
        else if(total6 == 0)
        {
            result6 = "You have great scope for learning during the face to face"
            + " training session, once you have an open mind to the possibilities"
            + " that an inclusive approach can offer";
        }
      
      
      if(Q6P1 == "" || Q6P2 == "" || Q6P3 == "" || Q6P4 == "" || Q6P5 == "")
      {
        document.getElementById("radio6").innerHTML = "You have not selected a button";
      }
      
      else
      {
        document.getElementById("radio6").innerHTML = result6;
      }
  }
  
//Section 7

   var section7 = new Array(2);
       section7[0] = Q7P1 = "";
       section7[1] = Q7P2 = "";
      
  function sectionSeven()
  {
      var i;
      var total7 = 0;
      var len = document.forms[0].Q7P1.length;
      var result7;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q7P1[i].checked)
        {
          Q7P1 = parseInt(document.forms[0].Q7P1[i].value);
          
          total7 += Q7P1;
        }
      
        if(document.forms[0].Q7P2[i].checked)
        {
          Q7P2 = parseInt(document.forms[0].Q7P2[i].value);
          
          total7 += Q7P2;
        }
      }
      
      
      if(total7>=10 && total7<=20)
        {
            result7 = "As a listening organisation you have important information"
            + " that can guide your journey towards UniversAbility. Your challenge"
            + " is to interpret what is being said and to translate it into inclusive"
            + " actions";
        }
      
        else if(total7 == 0)
        {
            result7 = "Your organisation has yet to learn the power of dialogue"
            + " as a means of providing desirable fitness services to all members"
            + " of the community";
        }
      
      
      if(Q7P1 == "" || Q7P2 == "")
      {
        document.getElementById("radio7").innerHTML = "You have not selected a button";  
      }
      
      else
      {
        document.getElementById("radio7").innerHTML = result7;
      }
   } 
   
//Section 8 

  var section8 = new Array(4);
      section8[0] = Q8P1 = "";
      section8[1] = Q8P2 = "";
      section8[2] = Q8P3 = "";
      section8[3] = Q8P4 = "";
      
  function sectionEight()
  {
      var i;
      var total8 = 0;
      var len = document.forms[0].Q8P1.length;
      var result8;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q8P1[i].checked)
        {
          Q8P1 = parseInt(document.forms[0].Q8P1[i].value);
          
          total8 += Q8P1;
        
            if(document.forms[0].Q8P2[i].checked)
            { 
              Q8P2 = parseInt(document.forms[0].Q8P2[i].value);
          
              total8 += Q8P2;
            }
        }
        
        if(document.forms[0].Q8P3[i].checked)
        {
          Q8P3 = parseInt(document.forms[0].Q8P3[i].value);
          
          total8 += Q8P3;
      
            if(document.forms[0].Q8P4[i].checked)
            {
              Q8P4 = parseInt(document.forms[0].Q8P4[i].value);
          
              total8 += Q8P4;
            }
        }           
      }
      
       
        if(total8>=30 && total8<=50)
        {
            result8 = "You are already a potential resource for people with disbilities"
            + " in your community, as your networks are an essential element in the"
            + " UFIT approach";
        }
      
        else if(total8>=10 && total8<=20)
        {
            result8 = "You have made a positive start upon which your organisation"
            + " can build sound relationships with people with disabilities. Unit"
            + " three will offer you more ideas in respect of forging alliances with"
            + " people with disabilities";
        }
      
        else if(total8 == 0)
        {
            result8 = "You have great scope for learning during the face to face"
            + " training session, once you have an open mind to the possibilities"
            + " that an inclusive approach can offer";
        }
      
      
      if(Q8P1 == "" || Q8P3 == "")
      {
        document.getElementById("radio8").innerHTML = "You have not selected" +
        " a button";  
      }
      else
      {
        document.getElementById("radio8").innerHTML = result8;
      }
  }   

//Section 9 

  var section9 = new Array(6);
      section9[0] = Q9P1 = "";
      section9[1] = Q9P2 = "";
      section9[2] = Q9P3 = "";
      section9[3] = Q9P4 = "";
      section9[4] = Q9P5 = "";
      section9[5] = Q9P6 = "";
      
  function sectionNine()
  {
      var i;
      var total9 = 0;
      var len = document.forms[0].Q9P1.length;
      var result9;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q9P1[i].checked)
        {
          Q9P1 = parseInt(document.forms[0].Q9P1[i].value);
          
          total9 += Q9P1;
        }
        
        if(document.forms[0].Q9P2[i].checked)
        { 
          Q9P2 = parseInt(document.forms[0].Q9P2[i].value);
       
          total9 += Q9P2;
        }
        
        if(document.forms[0].Q9P3[i].checked)
        {
          Q9P3 = parseInt(document.forms[0].Q9P3[i].value);
          
          total9 += Q9P3;
        }
      
        if(document.forms[0].Q9P4[i].checked)
        {
          Q9P4 = parseInt(document.forms[0].Q9P4[i].value);
          
          total9 += Q9P4;
        }
        
        if(document.forms[0].Q9P5[i].checked)
        {
          Q9P5 = parseInt(document.forms[0].Q9P5[i].value);
          
          total9 += Q9P5;
        }
        
        if(document.forms[0].Q9P6[i].checked)
        {
          Q9P6 = parseInt(document.forms[0].Q9P6[i].value);
          
          total9 += Q9P6;
        }           
      }
      
       
        if(total9>=40 && total9<=60)
        {
            result9 = "You have invested in your organisation's most important asset."
            + " Your potential to offer inclusive services is vast. The challenge is "
            + " to make sure that you optimally deploy this wisdom to mke all aspects"
            + " of your service provision truly inclusive";
        }
      
        else if(total9>=20 && total9<=30)
        {
            result9 = "There is some scope within your organisation to promote UniversAbility"
            + " principles and broaden your organisation's relevance in the wider"
            + " community";
        }
        
        else if(total9 == 10)
        {
            result9 = "Depending on the strength of influence of those with some"
            + " perspective on inclusion, you may have scope to drive improvements"
            + " from within. Consider the scope for repositioning those with training"
            + " and knowledge in the area of inclusion to optimise their influence";
        }
      
        else if(total9 == 0)
        {
            result9 = "UniversAbility is not something with which you have engaged "
            + "so the face to face training session will be an opportunity for " +
            "significant learning in this respect";
        }
      
      
      if(Q9P1 == "" || Q9P2 == "" || Q9P3 == "" || Q9P4 == "" || Q9P5 == "" || Q9P6 == "")
      {
        document.getElementById("radio9").innerHTML = "You have not selected" +
        " a button";  
      }
      
      else
      {
        document.getElementById("radio9").innerHTML = result9;
      }
  }   
  
//Section 10 

  var section10 = new Array(5);
      section10[0] = Q10P1 = "";
      section10[1] = Q10P2 = "";
      section10[2] = Q10P3 = "";
      section10[3] = Q10P4 = "";
      section10[4] = Q10P5 = "";
      
  function sectionTen()
  {
      var i;
      var total10 = 0;
      var len = document.forms[0].Q10P1.length;
      var result10;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q10P1[i].checked)
        {
          Q10P1 = parseInt(document.forms[0].Q10P1[i].value);
          
          total10 += Q10P1;
        }
        
        if(document.forms[0].Q10P2.checked)
        { 
          Q10P2 = parseInt(document.forms[0].Q10P2.value);
       
          total10 += Q10P2;
        }
        
        if(document.forms[0].Q10P3.checked)
        {
          Q10P3 = parseInt(document.forms[0].Q10P3.value);
          
          total10 += Q10P3;
        }
      
        if(document.forms[0].Q10P4.checked)
        {
          Q10P4 = parseInt(document.forms[0].Q10P4.value);
          
          total10 += Q10P4;
        }
        
        if(document.forms[0].Q10P5.checked)
        {
          Q10P5 = parseInt(document.forms[0].Q10P5.value);
          
          total10 += Q10P5;
        }          
      }
      
       
        if(total10>=40 && total10<=50)
        {
            result10 = "The facility is largely accessible and hence there is significant"
            + " scope for promoting UniversAbility";
        }
      
        else if(total10>=20 && total10<=30)
        {
            result10 = "While some aspects of your facility are accessible there is"
            + " scope for enhancement. The face to face training session will offer"
            + " you some suggestions for impovement here";
        }
        
        else if(total10 == 10)
        {
            result10 = "While you have made a start in the direction of UniversAbility"
            + " there is considerable scope for improvements";
        }
      
        else if(total10 == 0)
        {
            result10 = "The face to face training session will provide you with "
            + "wonderful ideas for making small (and inexpensive) changes to enhance "
            + "the UniversAbility of the facility";
        }
      
      
      if(Q10P1 == "" || Q10P2 == "" && Q10P3 == "" && Q10P4 == "" && Q10P5 == "")
      {
        document.getElementById("radio10").innerHTML = "You have not selected" +
        " a button";  
      }
      
      else
      {
        document.getElementById("radio10").innerHTML = result10;
      }
  }

//Section 11 

  var section11 = new Array(2);
      section11[0] = Q11P1 = "";
      section11[1] = Q11P2 = "";
      
  function sectionEleven()
  {
      var i;
      var total11 = 0;
      var len = document.forms[0].Q11P1.length;
      var result11;
      
      for(i=0; i<len; i++)
      {
        if(document.forms[0].Q11P1[i].checked)
        {
          Q11P1 = parseInt(document.forms[0].Q11P1[i].value);
          
          total11 += Q11P1;
        }
        
        if(document.forms[0].Q11P2[i].checked)
        {
          Q11P2 = parseInt(document.forms[0].Q11P2[i].value);
          
          total11 += Q11P2;
        }
      }
      
       
        if(total11 == 20)
        {
            result11 = "You clearly understand the power of imagery and language"
            + " and your materials may be potential templates for others in the"
            + " promotion of fitness services";
        }
      
        else if(total11 == 10)
        {
            result11 = "Your organisation has some appreciation of the need to "
            + "have diversity represented in your promotional materials. With a"
            + " little more thoughtfulness your promotional campaigns will speak"
            + " louder to a wider audience";
        }
        
        else if(total11 == 0)
        {
            result11 = "The face to face training session will offer you many ideas"
            + " for inclusivising your promotional materials";
        }
      
      
      if(Q11P1 == "" || Q11P2 == "")
      {
        document.getElementById("radio11").innerHTML = "You have not selected" +
        " a button";  
      }
      
      else
      {
        document.getElementById("radio11").innerHTML = result11;
      }
  } 


//Overall Comment
  
 function totalScore()
 {
   var overallResult = "";
   
   if(overallTotal>=340 && overallTotal<=425)
   {
    overallResult = "Your organisation is evidently committed to inclusion. Your " + 
    "perspective will be most valuable at the face to face training session as both" +
    " an advocate and a guide for inclusive fitness service provision. You are " + 
    "highly relevant in your community and hence the organisation is sustainable " +
    "and will remain so once your current commitment is supported and enhanced " +
    "over time."
   }
   
   else if(overallTotal>=245 && overallTotal<=339)
   {
    overallResult = "Your organisation is making genuine and meaningful efforts " + 
    "in the direction of universability.  However provision is probably patchy " + 
    "and inconsistent, which may cause some confusion among members and potential " + 
    "members. Promotion of inclusive opportunities as an organisational priority " + 
    "has the potential to broaden your relevance to an even greater number of " + 
    "community members. "
   }
   
   else if(overallTotal>=150 && overallTotal<=244)
   {
    overallResult = "While some work is being done to enhance inclusive provision, " + 
    "there is scope for significant gains in this aspect. Building on what you " + 
    "are doing well and embracing new ideas will see your organisation make the " + 
    "transitions to inclusivity with some ease. The face to face training session " + 
    "will be a unique opportunity to learn from others in your sector."
   }
   
   else
   {
    overallResult = "The face to face training session will be of immense value " + 
    "to your organisation. An exciting challenge awaits as you move towards universability. " + 
    "It will take some time but the secret is to keep doing what you are doing well " + 
    "and gradually add other initiatives to make your services more inclusive. " + 
    "The face to face training session will lead to significant learning for your " + 
    "organisation. "
   } 
   
   document.getElementById("overallResults").innerHTML = overallResult;
 }
 
       
 function removeText()
 {
    location.reload();
 } 