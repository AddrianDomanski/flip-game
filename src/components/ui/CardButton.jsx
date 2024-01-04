import classes from "./CardButton.module.css"

function CardButton({onClick}) {


  return (
    <div className={classes.cardbutton}><svg
    // width="35.599041mm"
    // height="40.65799mm"
    viewBox="0 0 37.599041 40.65799"
    onClick={onClick}
    version="1.1"
    id="svg5"
    inkscape:export-filename="bitmapa.svg"
    inkscape:export-xdpi="96"
    inkscape:export-ydpi="96"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
  >
    <sodipodi:namedview
      id="namedview7"
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1.0"
      inkscape:showpageshadow="2"
      inkscape:pageopacity="0.0"
      inkscape:pagecheckerboard="0"
      inkscape:deskcolor="#d1d1d1"
      inkscape:document-units="mm"
      showgrid="true"
    >
      <inkscape:grid
        type="xygrid"
        id="grid4636"
        originx="-82.002062"
        originy="-109.26309"
      />
    </sodipodi:namedview>
    <defs id="defs2" />
    <g
      inkscape:label="Warstwa 1"
      inkscape:groupmode="layer"
      id="layer1"
      transform="translate(-82.002065,-109.26309)"
    >
      <path
        id="path2981"
        d="m 99.753601,109.2631 c -0.255136,0.002 -0.484003,0.1573 -0.579809,0.39377 l -2.750737,6.77478 1.661397,-0.73742 2.021068,-4.97851 16.04243,6.5133 -7.38095,18.1808 0.71107,1.60197 8.07651,-19.89284 c 0.13112,-0.32279 -0.0244,-0.69074 -0.34726,-0.82166 l -17.211873,-6.98768 c -0.07677,-0.0312 -0.158957,-0.0471 -0.241846,-0.0465 z"
        sodipodi:nodetypes="cccccccccccc"
      />
      <path
        d="m 82.377012,122.45861 a 0.63056307,0.63056307 0 0 0 -0.320575,0.83258 l 11.657321,26.25495 a 0.63056307,0.63056307 0 0 0 0.832585,0.32057 l 16.977887,-7.53826 a 0.63056307,0.63056307 0 0 0 0.32057,-0.83259 l -11.65731,-26.25494 a 0.63056307,0.63056307 0 0 0 -0.832588,-0.32058 z m 1.08859,0.89716 15.826514,-7.02705 11.145304,25.10178 -15.826507,7.02705 z"
        id="path3021"
      />
    </g>
  </svg></div>
  );
}

export default CardButton;
