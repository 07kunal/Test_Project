import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import PayCodeMappingGrid from "../paycodemappinggrid";
import NewPaydata from "../paycodemappinggrid/NewPaydata";
const Page = styled.div``;

const PageContent = styled.div`
  padding: 30px;
  // max-width: 1200px;
  // margin: auto;
`;
const myheading = {
  fontSize: "20px",
  fontFamily: "your put",
  lineHight:"32px",
  margin:"0px !important",
  fontWeight:"600"
};

function MainTable() {
  return (
    <Page>
      <PageContent>
        <Typography marginBottom={3} variant="h5" component="h1" style={myheading}>
          Pay Code Mapping
        </Typography>
        <PayCodeMappingGrid />
        {/* <NewPaydata /> */}
      </PageContent>
    </Page>
  );
}

export default MainTable;
