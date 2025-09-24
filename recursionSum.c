
#include<stdio.h>

int main(){
    int num;
    printf("Enter num: ");
    scanf("%d", &num);
    int sum=0;
    while(num>0)
    {
        sum = sum + num %10;
        num = num/10;
    }
    printf("Sum of digits is %d\n", sum);
    return 0;
}