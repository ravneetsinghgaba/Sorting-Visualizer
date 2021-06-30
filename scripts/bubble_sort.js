function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "Chartreuse");//Color update
                div_update(divs[j+1],div_sizes[j+1], "Chartreuse");//Color update

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "Chartreuse");//Height update
                div_update(divs[j+1],div_sizes[j+1], "Chartreuse");//Height update
            }
            div_update(divs[j],div_sizes[j], "black");//Color updat
        }
        div_update(divs[j],div_sizes[j], "DarkSlateGray");//Color update
    }
    div_update(divs[0],div_sizes[0], "DarkSlateGray");//Color update

    enable_buttons();
}

/* blue ---> black
   green---> DarkSlateGray
   red--->Chartreuse */
