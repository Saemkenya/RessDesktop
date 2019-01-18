import React from "react";

const SchoolName = ({
  data: { 
    name,
    motto,
    email,
    website,
    AddrPoBox,
    AddrPostalCode,
    AddrTown,
    AddrCounty,
    AddrCountry 
  }
}) => (<div>
    <section className="v-top">
        <article className="mw8 v-top center br2 ba b--light-blue bg-lightest-blue">
        <div className="dt-ns dt--fixed-ns w-100">
        
        <div className="dtc w2 w3-ns v-mid">
        <img src="http://localhost:18700/static/logo.gif" 
            className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
            alt="student avatar"/>
      </div>

            <div className="dtc-ns v-mid">
                <div>
                <h2 className="fw4 blue mt0 mb3">{name}</h2>
                <p className="black-70 measure lh-copy mv0">
                    Motto: {motto}<br/>
                    Email: {email} | Website: {website}<br />
                    P.O Box {AddrPoBox} | {AddrPostalCode}, {AddrTown}, {AddrCounty} County, {AddrCountry}
                </p>
                </div>
            </div>
            <div className="pa3 pa4-ns dtc-ns v-mid">
                <p className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">
                
                    <fieldset className="cf bn ma0 pa0">
                    <div className="cf">
                        <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Search RESS Server" type="text" name="search" value="" id="search"/>
                        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search"/>
                    </div>
                    </fieldset>
                </p>
            </div>
            </div>
        </article>
    </section>
    </div>);

export default SchoolName;