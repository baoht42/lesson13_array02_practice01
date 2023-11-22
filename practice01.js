//bai 1
function doEx1(){
    let count1 = 0;
    let array_1 = [2,12,151,23,24,51,4,6,32,12];
    for (let i = 0; i < array_1.length; i++) {
        if (array_1[i]> 10){
            count1++;
        }
    }
    document.write("Co " + count1 + " so nguyen lon hon 10");
    return count1;
}

//bai 2
function doEx2(){
    let array2 = [2,12,151,23,24,51,4,6,32,14];
    let position = 0;
    let maxOfArray2 = array2[0];
    for (let i = 1; i < array2.length; i++) {
        if(array2[i]>maxOfArray2){
            maxOfArray2 = array2[i];
            position    = i;
        }
    }
    document.write("Phan tu lon nhat la "+ maxOfArray2 + " o vi tri " + position);
    return maxOfArray2;
}

//bai 3
function doEx3() {
    let array3 = [2, 12, 151, 23, 24, 51, 4, 6, 32, 14];
    let maxOfArray3 = array3[0];
    let sumArray3 = 0;
    let avgArray3 = 0;
    for (let i = 1; i < array3.length; i++) {
        if (array3[i] > maxOfArray3) {
            maxOfArray3 = array3[i];
        }
        sumArray3 += array3[i];

    }
    avgArray3 = sumArray3 / array3.length;

    document.write("Phan tu lon nhat la: " + maxOfArray3 +"<br>");
    document.write("Trung binh cong cac phan tu trong mang la: " + avgArray3);
    // return `Phan tu lon nhat la: ${maxOfArray3} va trung binh cong la: ${avgArray3}`;
    // return maxOfArray3;
    return maxOfArray3;
}

// function test() {
//     let result = doEx3();
//     console.log(result)
// }


function doEx4(){
    let inputArr = +prompt("Nhap vao so luong cua mang: ");
    let array4 = [];
    for (let i = 0; i < inputArr ; i++) {
        let inputNum = +prompt("Nhap vao so nguyen thứ " + (i + 1) + "của mảng:");
        array4.push(inputNum);
    }
    document.write("Mang sau khi dao nguoc la: "+ array4.reverse());
    return array4.reverse();
}

function doEx5(){
    let count5= 0;
    let array5 = [2, 12, 151, 23, 24, 51, 4, 6, 32, 14, -24, -3,-5, -6];
    for (let i = 0; i < array5.length; i++) {
        if (array5[i]<0){
            count5++;
        }
    }
    document.write("Mang khai bao la: "+ array5 + "<br>");
    document.write(`Co tat ca ${count5} so nguyen am`);
    return count5;
}

function doEx6() {
    let inputArr = +prompt("Nhap vao so luong cua mang: ");
    let array6 = [];
    for (let i = 0; i < inputArr; i++) {
        let inputNum = +prompt("Nhap vao so nguyen thứ " + (i + 1) + "của mảng:");
        array6.push(inputNum);
    }
    let v = +prompt("Nhap vao phan tu V can tim: ")
    let isFound = false;
    for (let i = 0; i < array6.length; i++) {
        if (v ===array6[i]){
            isFound = true;
        }
    }
    if (isFound){
        alert("V is in the Array")
    }else {
        alert("V is not in the Array")
    }
}

//bai 7
