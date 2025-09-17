"use client";

import { FaTwitter, FaFacebook, FaLinkedin, FaLink } from "react-icons/fa";
import { useState } from "react";

interface ShareButtonsProps {
  shareUrl: string;
  shareTitle: string;
}

export default function ShareButtons({ shareUrl, shareTitle }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}&via=jacobmorgan`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-3">
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <FaTwitter className="w-5 h-5" />
      </a>

      <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <FaFacebook className="w-5 h-5" />
      </a>

      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>

      <button
        onClick={handleCopyLink}
        className="flex-1 flex items-center justify-center gap-2 p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors relative"
        title={copied ? "Copied!" : "Copy link"}
      >
        <FaLink className="w-5 h-5" />
        {copied && (
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}