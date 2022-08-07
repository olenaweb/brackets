module.exports = function check(str, bracketsConfig) {
  // например:
  // bracketsConfig: Array(3)
  // 0: (2)['(', ')']
  // 1: (2)['[', ']']
  // 2: (2)['{', '}']
  // console.log('bracketsConfig=');
  // console.log(bracketsConfig);
  // преобразование массива bracketsConfig
  const simpleBracketsConfig = bracketsConfig.map((elem) => {
    // console.log('elem[0] = ' + elem[0]);
    // console.log('elem[1] = ' + elem[1]);
    // console.log('$elem[0]}${elem[1] = ' + elem[0] + elem[1]);
    return `${elem[0]}${elem[1]}`;
    //simpleBracketsConfig: (3) ['()', '[]', '{}']
  });
  // console.log('simpleBracketsConfig=');
  // console.log(simpleBracketsConfig);

  let old_length = str.length;

  while (str.length > 0) {
    // для каждого елемента массива конфигурации ищем соответствие в строке и удаляем его
    simpleBracketsConfig.forEach((elem) => {
      // debugger;
      // console.log('elem= ' + elem);
      // console.log('str1= ' + str);
      str = str.replaceAll(elem, "");
      // console.log('str2= ' + str);
    });
    // скобки не найдены 
    if (str.length == old_length) {
      return false;
    }
    // новая длина строки
    old_length = str.length;
    // debugger;
  }
  return true;
}