function colorMap(a) {
  let i = a % 16;
  if (a < 255 && a > 0) {
    switch (i) {
      case 0:
        return [66, 30, 15, 255];
      case 1:
        return [25, 7, 26, 255];
      case 2:
        return [9, 1, 47, 255];
      case 3:
        return [4, 4, 73, 255];
      case 4:
        return [0, 7, 100, 255];
      case 5:
        return [12, 44, 138, 255];
      case 6:
        return [24, 82, 177, 255];
      case 7:
        return [57, 125, 209, 255];
      case 8:
        return [134, 181, 229, 255];
      case 9:
        return [211, 236, 248, 255];
      case 10:
        return [241, 233, 191, 255];
      case 11:
        return [248, 201, 95, 255];
      case 12:
        return [255, 170, 0, 255];
      case 13:
        return [204, 128, 0, 255];
      case 14:
        return [153, 87, 0, 255];
      case 15:
        return [106, 52, 3, 255];
      default:
        return [0, 0, 0, 255];
    }
  } else {
    return [0, 0, 0, 255];
  }
}