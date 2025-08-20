'use client';
import { useState, useEffect } from 'react';
import { resumeData } from '../lib';

import React from 'react'

function Footer() {

const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

return (
 <footer className="bg-gray-900 text-gray-500 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} {resumeData.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
);

}
export default Footer