require 'bibtex'

module BibTeX
  class InlineTypewriterText < Filter
    # Keep inline typewriter labels readable when the LaTeX decoder strips math delimiters.
    def apply(value)
      value.to_s.gsub(/\$\\mathtt\{([\w -]+)\}\$/, '\1')
    end
  end
end
