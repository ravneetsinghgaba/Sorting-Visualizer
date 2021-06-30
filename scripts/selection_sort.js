function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"Chartreuse");//Color update

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"black");//Color update
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"Chartreuse");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"black");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"Chartreuse");//Height update
            div_update(divs[i],div_sizes[i],"Chartreuse");//Height update
            div_update(divs[index_min],div_sizes[index_min],"black");//Color update
        }
        div_update(divs[i],div_sizes[i],"DarkSlateGray");//Color update
    }
    div_update(divs[i],div_sizes[i],"DarkSlateGray");//Color update

    enable_buttons();
}