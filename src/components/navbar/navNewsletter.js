import React from "react";
import {
  Dropdown,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export const NavNewsletter = () => (
  <Navbar
    title="Select Issue"
    id="dropdown-news"
    variant="white"
    size="lg"
    className="text-center px-0"
  >
    <NavDropdown title="Select Issue">
      <div className="pre-scrollable w-100" style={{ minWidth: "100%" }}>
        <Dropdown.Header as={Link} to="/newsletter">
          Project Details
        </Dropdown.Header>
        <Dropdown.Divider />
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2014
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/70/2014/October">
          70. October 2014
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/69/2014/June">
          69. June 2014
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/68/2014/February">
          68. February 2014
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2013
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/67/2013/November">
          67. November 2013
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/66/2013/August">
          66. August 2013
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/65/2013/April">
          65. April 2013
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/64/2013/January">
          64. January 2013
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2012
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/63/2012/November">
          63. November 2012
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/62/2012/July">
          62. July 2012
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/61/2012/February">
          61. February 2012
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2011
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/60/2011/October">
          60. October 2011
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/59/2011/May">
          59. May 2011
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/58/2011/January">
          58. January 2011
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2010
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/57/2010/September">
          57. September 2010
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/56/2010/May">
          56. May 2010
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/55/2010/January">
          55. January 2010
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2009
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/54/2009/Fall">
          54. Fall 2009
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/53/2009/Summer">
          53. Summer 2009
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/52/2009/May">
          52. May 2009
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2008
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/51/2008/December">
          51. December 2008
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/50/2008/October">
          50. October 2008
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/49/2008/July">
          49. July 2008
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/48/2008/March">
          48. March 2008
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2007
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/47/2007/December">
          47. December 2007
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/46/2007/October">
          46. October 2007
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/45/2007/June">
          45. June 2007
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/44/2007/March">
          44. March 2007
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2006
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/43/2006/December">
          43. December 2006
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/42/2006/September">
          42. September 2006
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/41/2006/June">
          41. June 2006
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/40/2006/March">
          40. March 2006
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2005
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/39/2005/December">
          39. December 2005
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/38/2005/September">
          38. September 2005
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/37/2005/June">
          37. June 2005
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/36/2005/March">
          36. March 2005
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2004
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/35/2004/December">
          35. December 2004
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/34/2004/September">
          34. September 2004
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/33/2004/June">
          33. June 2004
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/32/2004/March">
          32. March 2004
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2003
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/31/2003/December">
          31. December 2003
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/30/2003/October">
          30. October 2003
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/29/2003/June">
          29. June 2003
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/28/2003/March">
          28. March 2003
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2002
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/27/2002/December">
          27. December 2002
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/26/2002/September">
          26. September 2002
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/25/2002/June">
          25. June 2002
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/24/2002/April">
          24. April 2002
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/23/2002/January">
          23. January 2002
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2001
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/22/2001/October">
          22. October 2001
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/21/2001/June">
          21. June 2001
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/20/2001/March">
          20. March 2001
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          2000
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/19/2000/December">
          19. December 2000
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/18/2000/September">
          18. September 2000
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/17/2000/June">
          17. June 2000
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/16/2000/March">
          16. March 2000
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          1999
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/15/1999/November">
          15. November 1999
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/14/1999/August">
          14. August 1999
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/13/1999/Spring">
          13. Spring 1999
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/12/1999/February">
          12. February 1999
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          1998
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/11/1998/October">
          11. October 1998
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/10/1998/February">
          10. February 1998
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          1997
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/9/1997/Fall">
          9. Fall 1997
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/8/1997/Summer">
          8. Summer 1997
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/7/1997/Spring">
          7. Spring 1997
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/6/1997/Winter">
          6. Winter 1997
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          1996
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/5/1996/Fall">
          5. Fall 1996
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/4/1996/Summer">
          4. Summer 1996
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/3/1996/Spring">
          3. Spring 1996
        </Dropdown.Item>
        <Dropdown.Item
          className="dropdown-item disabled playfair-display"
          style={{ fontWeight: "600" }}
        >
          1995
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/2/1995/Winter">
          2. Winter 1995
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/newsletter/1/1995/Summer">
          1. Summer 1995
        </Dropdown.Item>
      </div>
    </NavDropdown>
  </Navbar>
);
