const compressor = require('./lib/compressor')

const lorenIpsun = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu libero eget nunc mattis facilisis. Phasellus congue in est et malesuada. Praesent aliquet ornare elit. Sed feugiat est quis lectus eleifend, quis maximus leo blandit. Etiam nec sem quis dolor sodales blandit. Nullam posuere tellus in velit volutpat ultricies. Cras neque est, semper tempor ipsum sed, mollis consequat erat. Suspendisse bibendum dapibus ex sed viverra. Ut augue dolor, egestas vitae ligula sit amet, faucibus interdum massa. Mauris interdum nec lectus ac lobortis. Integer suscipit magna sed lectus lacinia pharetra. In eleifend nibh in velit finibus egestas. Integer aliquet non felis ut aliquet. Nunc varius aliquet enim, ut euismod dui pulvinar ut. Etiam mollis dolor elit, id tempor purus laoreet quis. Nunc lacinia purus in ultricies scelerisque.

Donec augue lectus, auctor in viverra eget, venenatis sed purus. Vestibulum eu sagittis dolor. Nunc ex ex, rhoncus sit amet augue id, porta interdum lectus. Curabitur nisi elit, blandit ac pulvinar et, eleifend ut lacus. Proin nec feugiat ex. Pellentesque a est eu tellus rutrum tincidunt ac at arcu. Suspendisse convallis, arcu sit amet hendrerit aliquet, elit ex porttitor metus, ut ullamcorper metus sapien ut mi. Etiam vel elit in orci imperdiet porttitor. Nulla ut cursus magna. Sed dapibus consequat diam vel iaculis. Aliquam ut condimentum mauris. Integer malesuada risus nec tempor congue. Curabitur sit amet suscipit justo, ac mattis velit. In pharetra quam sapien.

Mauris imperdiet turpis ut nisl pellentesque suscipit. Ut pulvinar mauris quis urna dapibus, sit amet porttitor dolor lobortis. Fusce efficitur risus aliquet justo finibus pulvinar. Phasellus tempus a mauris vulputate porttitor. Donec consequat elit vitae tincidunt eleifend. Vivamus pulvinar felis ac cursus cursus. Phasellus ac gravida leo, sed condimentum arcu. Nulla ac finibus est, eu suscipit augue. Vestibulum ante lectus, scelerisque et efficitur eget, venenatis nec nunc. Integer in metus id eros venenatis elementum vel vitae dui. Morbi vestibulum, leo tempor hendrerit malesuada, neque risus cursus ante, id euismod orci lacus in urna. Donec aliquet sed ipsum nec accumsan. Nam imperdiet, libero et semper vestibulum, sem nunc imperdiet erat, sed fermentum tortor ex a sem. Suspendisse consectetur augue vitae erat consequat vehicula. Nullam fermentum metus id iaculis tempus. Aenean ultricies felis at congue semper.

Morbi at commodo mauris, eget vulputate massa. Curabitur nulla neque, fringilla a tincidunt ac, fermentum quis dolor. Mauris sed arcu lacinia, tempus velit in, lobortis odio. Praesent venenatis commodo eros, sit amet consectetur mi porttitor ac. Etiam elementum velit ut gravida bibendum. Donec eget arcu libero. Ut bibendum est et neque finibus, facilisis dignissim neque posuere. Donec varius, odio at mollis consequat, tortor libero rhoncus orci, a laoreet nibh mauris eget dui. Morbi pharetra, quam vulputate dictum iaculis, ante libero posuere sem, non tempor justo mauris ac lorem. Etiam semper rhoncus congue. Nullam justo est, lacinia vitae neque consequat, scelerisque fermentum neque. Curabitur at purus arcu.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae pretium massa. Maecenas ullamcorper sed ex ac luctus. Ut euismod efficitur lorem ac blandit. Suspendisse porta velit ac porttitor semper. Nulla non leo non mi blandit pellentesque vel eget diam. Praesent tristique nulla quis ante faucibus, vel interdum odio convallis. Proin quis metus at sem eleifend placerat. Integer dignissim porttitor mauris, nec vulputate purus porttitor et. Duis pretium arcu id nisl vestibulum fermentum. Mauris ac metus lectus. Sed tellus justo, gravida vitae pretium placerat, congue vel lectus. Donec eros enim, venenatis quis consectetur et, pulvinar non tellus. Suspendisse faucibus, dui ut molestie aliquam, ipsum enim mattis massa, sed imperdiet enim nulla eu turpis.`

const compressed = compressor.compress(lorenIpsun)

console.log(compressed)