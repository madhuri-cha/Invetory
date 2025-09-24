#include<stdio.h>


    struct mystruct{

        long long int a; // Using long long int for large integer values
        float b;
        int c;
    };

    void main()
    {
        struct mystruct var=
        {
            .a=1024,
            .b=2.5,
            .c=-1
        };
        printf("a: %lld, b: %.2f, c: %d\n", var.a, var.b, var.c);
    }
   
