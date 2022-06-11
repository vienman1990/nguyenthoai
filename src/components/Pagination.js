export function Pagination(props) {
    let show = 15;
    let show_range = Math.floor(show/2);
    let page = 10;
    let current = props.currentPage;
    let count = props.count;
    let minpage = current - show_range > 0? current - show_range : 1;
    let last = Math.floor(count/page);
    let list = [];

    let maxpage = () => {
        if (current + show_range < last && current + show_range < show ){ return show; }
        if (current + show_range < last){ return current + show_range; }
        if (current + show_range > last){ return last; }
    };

    if (count > 0) {

        if (minpage > 1) {
            list.push(<div key="prev" >...</div>)
        }

        for(let i = minpage; i <= maxpage(); i++ ){
            let nameclass = current === i? 'active' : '' ;
            list.push(<div className={nameclass} key={i} onClick={() => props.changePage(i)}>{i}</div>)
        }

        if (maxpage() < last) {
            list.push(<div key="next" >...</div>)
        }
    }

    return (
        <div className="pagination">
            {list}
        </div>
    )

}