#include <iostream>
using namespace std;
int main()
{
    int target[] = {9, 26, 18};
    int sum[] = {7, 2, 11, 15};

for(int k=0; k < 3; k++)
{
    int t = target[k];     
    for(int i=0; i < 4; i++)
    {
        for(int j=0; j < i; j++)
        {
            if(sum[i] + sum[j] == t)
            {
                cout<< " { "<<i<<" , "<<j<<" } "<<endl;
            }
        }
    }
}

return -1;
}

