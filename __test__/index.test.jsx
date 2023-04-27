import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import MainNavigation from "../src/components/layout/MainNavigation";
import MovieList from "../src/components/movies/MovieList";

import "@testing-library/jest-dom";

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });

describe("MainNavigation", () => {
  it("Displays the heading", () => {
    render(<MainNavigation />);

    const heading = screen.getByRole("link", {
      name: /Star Wars/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("MainNavigation", () => {
  it("Displays All Movies", () => {
    render(<MainNavigation />);

    const heading = screen.getByRole("link", {
      name: /All Movies/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("MovieList", () => {
    it("Displays movies", () => {
      render(<MovieList />);
  
      const heading = screen.getByRole("link", {
        name: /All Movies/i,
      });
  
      expect(heading).toBeInTheDocument();
    });
  });
