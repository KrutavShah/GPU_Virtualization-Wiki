import json
import re
import xml.etree.ElementTree as ET

def main():
  root = ET.parse('/usr/share/nvidia/vgpu/vgpuConfig.xml').getroot()
  
  vgpuTypes = {}
  pgpuTypes = {}

  vgpuElements = (child for child in root if child.tag == 'vgpuType')
  pgpuElements = (child for child in root if child.tag == 'pgpu')

  for element in vgpuElements:
    devIdElement = element.find('devId')
    displayElement = element.find('display')

    vendorId = devIdElement.attrib['vendorId']
    deviceId = devIdElement.attrib['deviceId']

    vgpuId = element.attrib['id']
    vgpuName = element.attrib['name']

    displayWidth = displayElement.attrib['width']
    displayHeight = displayElement.attrib['height']

    displayCount = int(element.find('numHeads').text)
    frlConfig = int(element.find('frlConfig').text, 0)
    framebuffer = vgpuName.split('-')[-1][:re.search(r'[a-z]', vgpuName.split('-')[-1], re.I).start()]

    if framebuffer == '0':
      framebuffer = '0.5'

    cuda = bool(int(element.find('cudaEnabled').text))
    multiVgpu = bool(int(element.find('multiVgpuSupported').text))

    pgpuKey = vgpuName.split('-')[0]
    vgpuItem = {'id': f'nvidia-{vgpuId}', 'name': vgpuName, 'framebuffer': f'{framebuffer}G', 'displays': displayCount, 'displaySize': f'{displayWidth}x{displayHeight}', 'frlConfig': frlConfig, 'cuda': cuda, 'multiVgpu': multiVgpu}

    if pgpuKey not in pgpuTypes.keys():
      pgpuTypes[pgpuKey] = {}

    pgpuTypes[pgpuKey][int(vgpuId)] = vgpuItem

  for k, v in sorted(pgpuTypes.items()):
    print(f'::: details {k}')
    print('| Id | Name | Framebuffer | Display Count | Max Resolution | Max FPS | CUDA Enabled | Multiple vGPU Support |')
    print('| -- | -- | -- | -- | -- | -- | -- | -- |')

    for id, vgpu in sorted(v.items()):
      print(f"| {vgpu['id']} | {vgpu['name']} | {vgpu['framebuffer']} | {vgpu['displays']} | {vgpu['displaySize']} | {vgpu['frlConfig']} | {vgpu['cuda']} | {vgpu['multiVgpu']} |")

    print(':::')
    print('')

if __name__ == "__main__":
  main()
