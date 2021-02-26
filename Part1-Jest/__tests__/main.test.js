const formatVolumeIconPath = require('../assets/scripts/main');

test("check that correct icon-level is returned", () => {
    expect(formatVolumeIconPath(0)).toMatch(/volume-level-0/);
    expect(formatVolumeIconPath(0)).toMatch(new RegExp('volume-level-0'));

    expect(formatVolumeIconPath(1)).not.toMatch(/volume-level-0/);
    expect(formatVolumeIconPath(1)).not.toMatch(new RegExp('volume-level-0'));

    expect(formatVolumeIconPath(1)).toMatch(/volume-level-1/);
    expect(formatVolumeIconPath(1)).toMatch(new RegExp('volume-level-1'));

    expect(formatVolumeIconPath(33)).toMatch(/volume-level-1/);
    expect(formatVolumeIconPath(33)).toMatch(new RegExp('volume-level-1'));

    expect(formatVolumeIconPath(34)).toMatch(/volume-level-2/);
    expect(formatVolumeIconPath(34)).toMatch(new RegExp('volume-level-2'));

    expect(formatVolumeIconPath(66)). not.toMatch(/volume-level-3/);
    expect(formatVolumeIconPath(66)).not.toMatch(new RegExp('volume-level-3'));

    expect(formatVolumeIconPath(67)).toMatch(/volume-level-3/);
    expect(formatVolumeIconPath(67)).toMatch(new RegExp('volume-level-3'));

    expect(formatVolumeIconPath(100)).toMatch(/volume-level-3/);
    expect(formatVolumeIconPath(100)).toMatch(new RegExp('volume-level-3'));
});
