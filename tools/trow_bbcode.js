/**
 * Converts TROW bbcode to markdown
 */
;(function(exports) {

  const consts = {
    BOLD_START: 0,
    BOLD_END: 1,

    ITALIC_START: 10,
    ITALIC_END: 11,

    LINE_START: 20,
    LINE_END: 21,

  }

  const paragraphType = {
    p: 0,
    // h2 -- [center][size=3]
    h2: 100,
    // h3 -- [center][size=2]
    h3: 101,
    // h4 -- [center]
    h4: 200,
    // h6 -- [right]
    h6: 300,
  };

  function paragraph(type, parts) {
    return { type, parts };
  }

  /**
   * @return [ {}           ]
   */
  function parse(bbString) {
    const bbStatus = {
      center: false,
      right: false,
      size: 0,
      bold: false,
      italic: false
    }

    while (bbString) {
      matched = /(\[\/?(b)\])?(.*$)/i.exec(bbString);
      //         1      2      3
      if (matched) {
        console.log([
          matched[1],
          matched[2],
          matched[3]
        ])
        const control = matched[1];
        bbString = matched[3];
      } else {
        console.warn('not match', JSON.stringify(bbString.slice(0, 50)));
        break;
      }
    }

    
  }

  exports.toMD = function(bbString) {
    return parse(bbString);
  }


  })(typeof window === "undefined" ? exports : window);
