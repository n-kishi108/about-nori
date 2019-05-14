$(document).ready(function() {
    let cleate_graph = function(name,percent){
        let element = document.getElementById(name);
        let context = element.getContext( "2d" );
    
        context.beginPath ();
    
        let angleA = 360 * ( percent / 100 );
        let angleB = 360 * ( (100 - percent) / 100 );
    
        context.beginPath ();
        context.arc( 50, 50, 50, (0 - 90) * Math.PI / 180, (angleA - 90) * Math.PI / 180, false );
        context.lineTo( 50, 50 );
        context.fillStyle = "#16a4b4";
        context.fill();
    
        context.beginPath ();
        context.arc( 50, 50, 50, (angleA - 90) * Math.PI / 180, ((angleA + angleB) - 90) * Math.PI / 180, false );
        context.lineTo( 50, 50 );
        context.fillStyle = "#EBEBEB";
        context.fill();
    };
    
    let match_graph = document.getElementsByClassName('match_graph');
    for (let i = 0; i < match_graph.length; i++) {
        match_graph[i].setAttribute('id', 'graph_'+i);
        let name = match_graph[i].getAttribute('id');
        let percent = match_graph[i].getAttribute('data-percent');
        let percent_num =  match_graph[i].nextElementSibling.getElementsByTagName('span');
        percent_num[0].textContent = percent;
        cleate_graph(name,percent);
    }
})
