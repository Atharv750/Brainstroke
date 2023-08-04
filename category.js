export default function Category(props) {
  return ( 
    <div>
    <div className="Rectangle0"  >
    <div className="Search" >
    <input type="text" placeholder="Search"  class="py-2 px-3" style={{width: 300, height: 43, background: '#E9E9E9', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)', borderRadius: 20}}/>
    </div>
    </div>
    <br></br>

    <div className="Menu"  style={{color: 'black', fontSize: 20, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word', textAlign:"end"}}>Menu
    </div>

<div className="flex flex-wrap space-x-1">

<div className="rect-1"  style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900 px-4 py-2">Breakfast</button>
        </div>
</div>

<div className="rect-2" class="px-4 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Soup</button>
        </div>
</div>
<div className="rect-3" class="px-4 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Pasta</button>
        </div>
</div>
<div className="rect-3" class="px-4 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Sushi</button>
        </div>
</div>

</div>


<br></br>
<div className="conatiner" class="flex flex-wrap space-x-1">

<div className="rect-1" class="px-3 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Main Course</button>
        </div>
</div>

<div className="rect-2" class="px-4 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast"  style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Desserts</button>
        </div>
</div>
<div className="rect-3"class="px-4 py-2 " style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Drinks</button>
        </div>
</div>
<div className="rect-3"class="px-4 py-2" style={{width: 156, height: 120, background: '#6DD8B8', borderRadius: 20}}>
      <div className="Breakfast" style={{width: 118, height: 19, color: 'black', fontSize: 15, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>
        <button class="hover:text-blue-900">Alcohol</button>
        </div>
</div>

</div>
<br></br>
<div className="Line1" style={{width: 648, height: 0, border: '0.50px black solid'}}></div>

<br></br>
<div className="ChooseCategory" style={{color: 'black', fontSize: 25, fontFamily: 'Avenir', fontWeight: '500', wordWrap: 'break-word',textAlign:"center"}}>Choose Category
</div>
        </div>
      
      );   
}