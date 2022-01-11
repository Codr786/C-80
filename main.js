var student_name_array=[];

function submit()
{
    var display_student_name_array = [];

    for (var i = 1; i<=4; i++)
    {
        var student_name = document.getElementById("name_of_the_student"+ i).value;
        console.log(student_name);
        student_name_array.push(student_name);
    }
    console.log(student_name_array);

    var length_of_student_name_array = student_name_array.length;
    console.log(length_of_student_name_array);

    for (var a=0; a<length_of_student_name_array; a++)
    {
        display_student_name_array.push("<h4> NAME:"+ student_name_array[a]+"</h4>");
        console.log(display_student_name_array);
    }
    console.log(display_student_name_array);
    document.getElementById("display_name_with_comas").innerHTML=display_student_name_array;

    var remove_comas = display_student_name_array.join(" ");
    console.log(remove_comas);
    document.getElementById("display_name_without_commas").innerHTML = remove_comas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    student_name_array.sort();
    console.log( student_name_array);


    var display_student_name_array_sorting = [];

    var length_of_student_name_array = student_name_array.length;
    console.log(length_of_student_name_array);

    for (var a=0; a<length_of_student_name_array; a++)
    {
        display_student_name_array_sorting.push("<h4> NAME:"+ student_name_array[a]+"</h4>");
        console.log(display_student_name_array_sorting);
    }
    
    var remove_comas = display_student_name_array_sorting.join(" ");
    console.log(remove_comas);
    document.getElementById("display_name_without_commas").innerHTML = remove_comas;
}
