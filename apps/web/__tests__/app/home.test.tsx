import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders hero section with main heading', () => {
    render(<Home />);
    expect(screen.getByText(/Handcrafted Wooden Creations/i)).toBeInTheDocument();
    expect(screen.getByText(/by Kev Simmonds/i)).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Home />);
    expect(screen.getByText('View Gallery')).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders services section', () => {
    render(<Home />);
    expect(screen.getByText('Services & Specialties')).toBeInTheDocument();
    expect(screen.getByText('Custom Furniture')).toBeInTheDocument();
    expect(screen.getByText('Decorative Pieces')).toBeInTheDocument();
    expect(screen.getByText('Restoration Work')).toBeInTheDocument();
    expect(screen.getByText('Commissioned Projects')).toBeInTheDocument();
  });

  it('renders featured projects section', () => {
    render(<Home />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders final CTA section', () => {
    render(<Home />);
    expect(screen.getByText('Ready to Start Your Project?')).toBeInTheDocument();
  });
});
