import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=`}>
              <img src={Edit} alt='' />
            </Link>
            <img src={Delete} alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic
          excepturi sapiente iure at incidunt cumque similique nihil ex, harum
          nesciunt eaque amet adipisci inventore! Qui quisquam vel accusantium
          ad!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          animi, iure, assumenda voluptatum, est hic amet sit veritatis aut nam
          repudiandae iusto dignissimos excepturi accusantium suscipit
          aspernatur omnis molestiae? Iste.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit animi, iure, assumenda
          voluptatum, est hic amet sit veritatis aut nam repudiandae iusto
          dignissimos excepturi accusantium suscipit aspernatur omnis molestiae?
          Iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          animi, iure, assumenda voluptatum, est hic amet sit veritatis aut nam
          repudiandae iusto dignissimos excepturi accusantium suscipit
          aspernatur omnis molestiae? Iste.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Impedit animi, iure, assumenda
          voluptatum, est hic amet sit veritatis aut nam repudiandae iusto
          dignissimos excepturi accusantium suscipit aspernatur omnis molestiae?
          Iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          animi, iure, assumenda voluptatum, est hic amet sit veritatis aut nam
          repudiandae iusto dignissimos excepturi accusantium suscipit
          aspernatur omnis molestiae? Iste.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
