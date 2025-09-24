// #include <stdio.h>
// int main()
// {
//     char ch;
//     sizeof(ch); 
//     sizeof(&ch);
//     sizeof(1+2-3/4);
    


//     return 0;
// }
#include <stdio.h>
int main() {

     //char ch;
    char ch=7;
    printf("ch %zu \n", ch); 
    printf("Size of char: %zu byte\n",sizeof(&ch));//sizeof 
    printf("Size of char  : %zu byte\n",sizeof(1+2-3/4));
    printf("Size of char: %zu byte\n", sizeof(char));
    
    return 0;
}
