import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/layout/footer';

describe('Footer Component', () => {
  it('renders footer with brand name', () => {
    render(<Footer />);
    expect(screen.getByText('JKL')).toBeInTheDocument();
    expect(screen.getByText('Woodcrafts')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Gallery')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders contact email', () => {
    render(<Footer />);
    expect(screen.getByText('kevswoodencreations@gmail.com')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    const facebookLink = links.find((link) =>
      link.getAttribute('href')?.includes('facebook.com')
    );
    const linkedinLink = links.find((link) =>
      link.getAttribute('href')?.includes('linkedin.com')
    );
    expect(facebookLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});
