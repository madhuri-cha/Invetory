#include<stdio.h>

int main()

{
    int a=10;
    int *p = &a;// Pointer to int
    printf("Value of a is %d\n", *p); // Dereferencing pointer to get value of a
    int **q = &p;// Pointer to pointer
    printf("Value of a using pointer to pointer is %d\n", **q); // Dereferencing pointer to pointer
 
    int ***r = &q; // Pointer to pointer to pointer
    printf("Value of a using pointer to pointer to pointer is %d\n", ***r); // Dereferencing pointer to pointer to pointer

    printf("%p\n", (void*)p);
    printf("%p\n", (void*)&p);
    printf("%d\n", *p);
    printf("%d\n", *&*&p);
    printf("%d\n", *&*&a);
    return 0;
}