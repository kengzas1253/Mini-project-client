import React from 'react';

const Navbar =()=>{
  return (
    <div>
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark" >
  <ul class="navbar-nav" style={{marginLeft:"40px"}}>
    <li class="nav-item active">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/Apply">Apply Job</a>
    </li> 
    <li class="nav-item">
      <a class="nav-link " href="/status">Stutus</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/admin">Admin</a>
    </li>
   
  </ul>
</nav>

    </div>
  );
}

export default Navbar;
