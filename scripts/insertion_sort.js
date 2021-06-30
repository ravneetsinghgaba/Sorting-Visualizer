function Insertion()
{
    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"Chartreuse");//Color update
            div_update(divs[i+1],div_sizes[i+1],"Chartreuse");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"Chartreuse");//Height update
            div_update(divs[i+1],div_sizes[i+1],"Chartreuse");//Height update
    
            div_update(divs[i],div_sizes[i],"black");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"black");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"DarkSlateGray");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"DarkSlateGray");//Color update

    enable_buttons();
}

/*
    *****************
    DONE BY:-   TUMMALA KETHAN
    E-MAIL:-    tummala.kethan@gmail.com
    *****************
*/