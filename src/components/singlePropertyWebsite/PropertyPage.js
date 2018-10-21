import React, { Component } from "react";
import realtyLogo from "./galleryImages/remaxLogo.jpg";
import HeaderBox from "./HeaderBox.js";
import Gallery from "./Gallery.js";
import RealtorCard from "./RealtorCard.js";
import List from "./List.js";
import Map from "./Map.js";
import Navigation from "../Navigation.js";

import scottPic from "./galleryImages/cookS.jpg";
import justinPic from "./galleryImages/cookJ.jpg";
import realtorEqualOpMLS from "./galleryImages/realtorEqualOpMLS.png";

import "../../App.css";

const realtyName = "RE/MAX SOLUTIONS";
const realtyAddress = "1425 S Higley Rd, Ste #104, Gilbert, AZ 85296";

class PropertyPage extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <HeaderBox
          homePrice="$889,900"
          streetAddress="24029 S 201st Place"
          cityStateZip="Queen Creek, AZ 85142"
          realty="RE/MAX Solutions"
          bedrooms="5"
          bathrooms="3.5"
          squareFeet="4,007"
        />
        <Gallery
          intro="Pecans is a gated luxury community with multi-million dollar homes, tree
              lined streets, rose gardens, two splash pads, mini-golf, playgrounds,
              shaded walking trails & more. SE Valley's most beautiful community!
              Gorgeous home with every upgrade imaginable! Gourmet kitchen has
              staggered raised panel walnut cabinets, granite, six burner gas cooktop,
              double oven, subway tile backsplash, built in fridge, pendant lights,
              RO, HUGE walk in pantry, breakfast bar/kitch island! Home has upgraded
              flooring, 12 foot ceilings, upgraded light/plumbing fixtures! TONS of
              storage! Brand new custom salt water pebble sheen pool w/ diving
              platform, water feature & artistic paves! Yard has SPORTS COURT, gas
              firepit, custom playset, in ground tramp, lots of grass & more. To many
              features to list. Custom built in desks in game room! Approx 7 citrus
              trees, 14 pecan trees plus a peach, plum, apricot, fig & apple tree.
              Surround sound in family room, game room & patio. Sports court has both
              a basketball and pickle ball set up. More energy efficient with added
              insulation and sealed home along with 2x6 construction. Check out the
              video!"
        />
        <div className="container mapListWrap">
          <div className="mapList">
            <List
              listPrice="$899,900"
              bedrooms="5"
              bathrooms="3.5"
              location="The Pecans"
              squareFeet="4,007"
              lotSize=".72"
              yearBuilt="2013"
              propertyType="Residential"
              listingId="5817122"
            />
            <Map mapSource="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3337.375945633562!2d-111.65063488480635!3d33.230453080837464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872a4d7163341db1%3A0xd60bd07fa0eb3cf6!2s24019+S+201st+Pl%2C+Queen+Creek%2C+AZ+85142!5e0!3m2!1sen!2sus!4v1536699750572" />
          </div>
        </div>
        <div className="cardHolder">
          <RealtorCard
            picName={scottPic}
            name="Scott Cook"
            profession="Realtor"
            idNum="SA564464000"
            phone="480-993-9317"
            tel="tel:480-993-9317"
            email="scottcookhomes@gmail.com"
            mailto="mailto:scottcookhomes@gmail.com"
          />
          <RealtorCard
            picName={justinPic}
            name="Justin Cook"
            profession="Realtor"
            idNum="BR520620000"
            phone="602-405-2665"
            tel="tel:602-405-2665"
            email="justincook@remax.net"
            mailto="mailto:justincook@remax.net"
          />
        </div>
        <a
          className="btn btn-primary btn-lg requestInfo removeUnderline"
          href="mailto:scottcookhomes@gmail.com?subject=Interested%20in%2024019%20S%20201st%20Place"
          role="button"
        >
          REQUEST MORE INFO
        </a>
        <br />
        <img src={realtyLogo} className="App-logo" alt="logo" />
        <p>{realtyName}</p>
        <p>{realtyAddress}</p>
        <img src={realtorEqualOpMLS} className="equalLogo" />
        <p>Each Office Independently Owned and Operated</p>
      </div>
    );
  }
}

export default PropertyPage;
