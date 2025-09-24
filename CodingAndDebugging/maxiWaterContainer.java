public class maxiWaterContainer {
public static int maxArea(int h)
{
    int maxWater=0;
    int i = 0;
    int array[] = {1,5,6,8,9,7};
    int j = array.length - 1;
    while(i < j)
    {
     int ht= Math.min(array[i], array[j]);
     int wd= j - i;
     int currWater = ht * wd;
     if(maxWater < currWater)
     {
        maxWater = currWater;
     }
     if(array[i] < array[j])
     {
        i++;
     }
     else
     {
        j--;
     }
    }
    return maxWater;
}    
 public static void main(String[] args) 
 {
    int area = maxArea(10);
    System.out.println(area);
 }

}
