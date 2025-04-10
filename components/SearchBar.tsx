'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {

}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
    const [term, setTerm] = useState('');
    const router = useRouter();
    const pathname = usePathname();
  
    const handleSearch = () => {
      const encoded = encodeURIComponent(term.trim());
      if (encoded) {
        router.push(`${pathname}?s=${encoded}`);
      }
    };
  
    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
  
    return (
      <div className="flex gap-2 w-full max-w-lg">
        <Input
          placeholder="Search heroes, strategies, etc..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyDown={handleEnterKey}
          className="bg-white"
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    );
  };

export default SearchBar;