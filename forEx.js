//1부터 10까지 출력
document.write('1 2 3 4 5 6 7 8 9 10');
document.write('<br><br>');

//1부터 10까지 출력
let i;
for(i = 1; i <= 10; i++){
    document.write(i + ' ');
}
document.write('<br><br>');

//1부터 100까지 3의 배수 출력
for(i = 1; i <= 100; i++){
    if(i%3 == 0)
        document.write(i + ' ');
}
document.write('<br><br>');

//1부터 100까지 3의 배수 출력(10씩)
let cnt;
for(i = 1, cnt = 0; i <= 100; i++){
    if(i%3 == 0){
        document.write(i + ' ');
        cnt++;
        if(cnt%10 == 0)
            document.write('<br>');

    }
}
document.write('<br><br>');

//1부터 100까지의 합
let sum;
for(i = 1, sum = 0; i <= 100; i++){
    sum += i;
}
    document.write('1부터 100까지의 합 = ' + sum);
    document.write('<br><br>');

//1부터 100까지의 합(8의 배수)
for(i = 1, sum = 0; i <= 100; i++){
    if(i%8 == 0){
        sum += i;
    }
}
    document.write('1부터 100까지의 합 = ' + sum);
    document.write('<br><br>');

//1부터 100까지의 합, 처음으로 300을 넘는 숫자는
for(i = 1, sum = 0; i <= 100; i++){
    sum += i;
    if(sum >= 100)
        break;
}
    document.write('1부터 100까지의 합 중에서 100이상의 첫번째 합 = ' + sum + "<br><br>");
    document.write('1부터 100까지의 합 중에서 100이상의 첫번째 수 = ' + i);
    document.write('<br><br>');

//1부터 100까지의 합 중에서 8의 배수를 생략한 합
for(i = 1, sum = 0; i <= 100; i++){
    if(i%8 == 0)
        continue;
    sum += i;
}
    document.write('1부터 100까지의 합(8의 배수 생략) = ' + sum);
    document.write('<br><br>');