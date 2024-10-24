import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../../../styles";

const Container = styled.div`
  display: flex;
  margin: 3px;
  justify-content: space-between;
  font-size: 12px;
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SideHeadline = styled.span`
 font-size: 12px;
`;

const DisplayContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FilterContent = styled.div`
  display: flex;
  gap: 1rem;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center; 
  gap: 0.3rem;
`;

const DropdownBody = styled.div`
  position: absolute;
  width: 10rem;
  background: white;
  border: 1px solid ${colors.orange};
  border-radius: 5px;
  padding: 0.5rem;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  z-index: 10;
`;

const DropdownBodyRow = styled.label`
display: flex;
  gap: 0.2rem;
`;

const DownArrow = styled.div`
  border: solid ${colors.orange};
  border-width: 0 3px 3px 0;
  display: inline-block;
  margin-bottom: 5px;
  padding: 5px;
  transform: rotate(45deg);
`;

function DisplayFilters() {
  const [selectedViewMode, setSelectedViewMode] = useState("map");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMissionDropdownOpen, setIsMissionDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const locationOptions = [
    { label: "Outside", value: "outside" },
    { label: "Inside", value: "inside" },
  ];

  const missionOptions = [
    { label: "Chipreading", value: "chipreading" },
    { label: "Health Checkup", value: "health checkup" },
  ];

  const statusOptions = [
    { label: "Healthy", value: "healthy" },
    { label: "Not well", value: "not well" },
    { label: "Need help asap", value: "need help asap" },
  ];

  const [filters, setFilters] = useState({
    locations: locationOptions.map((option) => option.value),
    missions: missionOptions.map((option) => option.value),
    statuses: statusOptions.map((option) => option.value),
  });

  const handleCheckboxChange = (e, filterGroup) => {
    const { value, checked } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterGroup]: checked
        ? [...prevFilters[filterGroup], value]
        : prevFilters[filterGroup].filter((v) => v !== value),
    }));
  };
  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };
  const toggleMissionDropdown = () => {
    setIsMissionDropdownOpen(!isMissionDropdownOpen);
  };
  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  return (
    <Container>
      <SideColumn>
        <SideHeadline>Display:</SideHeadline>
        <DisplayContent>
          <label>
            <input
              type="radio"
              name="viewMode"
              value="map"
              checked={selectedViewMode === "map"}
              onChange={(e) => setSelectedViewMode(e.target.value)}
            />
            Map
          </label>
          <label>
            <input
              type="radio"
              name="viewMode"
              value="list"
              checked={selectedViewMode === "list"}
              onChange={(e) => setSelectedViewMode(e.target.value)}
            />
            List
          </label>
        </DisplayContent>
      </SideColumn>

      <SideColumn>
        <SideHeadline>Filter cats:</SideHeadline>
        <FilterContent>
          <DropdownContainer>
            <DropdownHeader onClick={toggleLocationDropdown}>
              Location <DownArrow />
            </DropdownHeader>
            <DropdownBody isOpen={isLocationDropdownOpen}>
              {locationOptions.map((location) => (
                <DropdownBodyRow key={location.value}>
                  <input
                    type="checkbox"
                    name="locations"
                    value={location.value}
                    checked={filters.locations.includes(location.value)}
                    onChange={(e) => handleCheckboxChange(e, "locations")}
                  />
                  {location.label}
                </DropdownBodyRow>
              ))}
            </DropdownBody>
          </DropdownContainer>

          <DropdownContainer>
            <DropdownHeader onClick={toggleMissionDropdown}>
              Missions <DownArrow />
            </DropdownHeader>
            <DropdownBody isOpen={isMissionDropdownOpen}>
              {missionOptions.map((mission) => (
                <DropdownBodyRow key={mission.value}>
                  <input
                    type="checkbox"
                    name="missions"
                    value={mission.value}
                    checked={filters.missions.includes(mission.value)}
                    onChange={(e) => handleCheckboxChange(e, "missions")}
                  />
                  {mission.label}
                </DropdownBodyRow>
              ))}
            </DropdownBody>
          </DropdownContainer>

          <DropdownContainer>
            <DropdownHeader onClick={toggleStatusDropdown}>
              Statuses <DownArrow />
            </DropdownHeader>
            <DropdownBody isOpen={isStatusDropdownOpen}>
              {statusOptions.map((status) => (
                <DropdownBodyRow key={status.value}>
                  <input
                    type="checkbox"
                    name="status"
                    value={status.value}
                    checked={filters.statuses.includes(status.value)}
                    onChange={(e) => handleCheckboxChange(e, "statuses")}
                  />
                  {status.label}
                </DropdownBodyRow>
              ))}
            </DropdownBody>
          </DropdownContainer>
        </FilterContent>
      </SideColumn>
    </Container>
  );
}

export default DisplayFilters;
