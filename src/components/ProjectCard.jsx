/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { GitLogo } from "../assets";

const ProjectCard = ({ repoData }) => {
  return (
    <Row xs={1} md={2} className="flex flex-wrap pl-16">
      {repoData?.map((repo) => (
        <Link to={repo?.html_url} key={repo?.id}>
          <Card className="bg-fuchsia-300 m-4 rounded-lg h-auto w-[250px] lg:w-[300px] hover:shadow-lg cursor-pointer">
            <Card.Img
              variant="top"
              src={GitLogo}
              className="h-40 w-full rounded-t-lg"
            />
            <Card.Body className="p-4">
              <Card.Title className="text-xl font-bold">
                {repo?.name}
              </Card.Title>
              <Card.Text>{repo?.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Row>
  );
};

export default ProjectCard;
