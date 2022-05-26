import React from "react";
import ReactDOM from "react-dom";
import AppContent from "../HomePage/AppContent";
import { render } from "../test_utils/testRender";

describe("AppContent", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppContent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders and matches snapshot", async () => {
    const c = await render(<AppContent />);
    expect(c.baseElement).toMatchSnapshot();
  });

  //Due to time constraints
  //I'll describe my tests in pseudo code
  //my methodology described here would be the same as other components as well
  //and I'm typically an advocate for TDD

  it("handleSelectedClick sets state properly", () => {
    //invoke the handleSelectedClick with an input value of Market.All
    //assert selected has the value of Market.All
  });

  it("filterUsers sets filteredPeople correctly with selected state data", () => {
    //set selected state prop to 'SoCal'
    //invoke filterUsers
    //assert that the filteredPeople contains only users with SoCal value
  });

  it("filterUsers sets filteredPeople correctly with no selected state data", () => {
    //invoke filterUsers without pre-setting the state prop selected. (default All)
    //assert that filteredPeople is set to the default People value
  });

  it("setUserTeam sets team with no existing team", () => {
    //invoke setUserTeam with Person param
    //assert state item of team contains new person
  });

  it("setUserTeam sets team with existing team no dupe", () => {
    //manually set team state item with a person
    //invoke setUserTeam with Person param different than existing
    //assert state item of team contains new person
  });

  it("setUserTeam sets team with existing team dupe", () => {
    //manually set team state item with a person
    //invoke setUserTeam with Person param same as existing
    //assert state item of team doesn't contain new person
  });

  it("precentDuplicates returns false with no dupe", () => {
    //manually set team state item with a person
    //invoke precentDuplicates with Person param different than existing
    //assert return value of false
  });

  it("precentDuplicates returns false with dupe", () => {
    //manually set team state item with a person
    //invoke precentDuplicates with Person param same as existing
    //assert return value of true
  });

  it("checkClicked returns false when name isn't in team", () => {
    //manually set team state item with a person
    //invoke checkClicked with name different than existing
    //assert return value of false
  });

  it("checkClicked returns false when name is in team", () => {
    //manually set team state item with a person
    //invoke checkClicked with name same as existing
    //assert return value of true
  });

  it("useEffect with selected dependency change", () => {
      //manually set selected state item with Market.SoCal
      //assert filterUsers is called
  })

  it("useEffect with selected dependency no change", () => {
    //manually set selected state item with Market.All
    //assert filterUsers isn't called
})
});
